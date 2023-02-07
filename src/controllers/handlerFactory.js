const fs = require('fs');
const { Op } = require('sequelize');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures'); 
const db = require("../models");
const { sequelize } = require("../models");
const { getOptions } = require('./commonController');
const axios = require('axios');
const keys = require('../config/keys');

let axiosOptions = {
  // Use baseUrl: 'http://localhost:2111' when on localhost
  // Use baseUrl: 'https://pos-manager-vit.herokuapp.com' when deployed on heroku
  baseURL: keys.axiosBaseUrl,
}

const getId = (Model, req) => {
  // userId as referred to as 'id'
  let id = req.params.id * 1;
  
  switch(Model.name) {
    case 'wedding':
      id = req.params.weddingId * 1;
      break;
    case 'weddingEvent':
      id = req.params.weddingEventId * 1;
      break;
    case 'rsvpTemplate':
      id = req.params.rsvpTemplateId * 1;
      break;
    case 'socialMediaLinkType':
      id = req.params.socialMediaLinkTypeId * 1;
      break;
    case 'vendorCategory':
      id = req.params.vendorCategoryId * 1;
      break;
    case 'venueCategory':
      id = req.params.venueCategoryId * 1;
      break;
    case 'socialMediaLink':
      id = req.params.socialMediaLinkId * 1;
      break;
    case 'vendorProfile':
      id = req.params.vendorProfileId * 1;
      break;
    case 'vendorDocType':
      id = req.params.vendorDocTypeId * 1;
      break;
    case 'vendorDoc':
      id = req.params.vendorDocId * 1;
      break;
    default:
      break;
  }
  return id;
};

exports.checkId = Model => catchAsync(async (req, res, next) => {
  
  const id = getId(Model, req);
  const doc = await Model.findByPk(id);
  if(!doc) {
    return res.status(404).json({
      status: 'fail',
      message: `Invalid ${Model.name} Id`
    });
  }

  next();
});

const addConditionalWhereClause = (Model, features, req) => {
  switch(Model.name) {
    case 'wedding':
      // Only get weddings created by logged in user
      features.query.where.userId = req.user.id;
      break;
    case 'weddingEvents':
      if(req.params.weddingId) {
        features.query.where.weddingId = req.params.weddingId * 1;
      }
      break;
    case 'vendorDoc':
      if(req.params.id) {
        // We are getting id from params, 
        // but for security purpose it is 
        // restricted to only 'vendors' and 'admins'
        features.query.where.userId = req.params.id * 1;
      }
      break;
    case 'socialMediaLink':
      if(req.params.id) {
        // We are getting id from params, 
        // but for security purpose it is 
        // restricted to only 'vendors' and 'admins'
        features.query.where.userId = req.params.id * 1;
      }
      break;
    default:
      break;
  };
};

const updateProperties = (Model, req, doc) => {
  switch(Model.name) {
    case 'wedding':
      const { groom, bride } = req.body;
      doc.groom = groom;
      doc.bride = bride;
      break;
    case 'rsvpTemplate':
      const { title, backgroundImg, thumbnail } = req.body;
      if(doc.backgroundImg && doc.thumbnail) {
        // Delete existing images
        fs.rmSync(`public/img/rsvpTemplates/${doc.backgroundImg}`);
        fs.rmSync(`public/img/rsvpTemplates/${doc.thumbnail}`);
      }
      doc.title = title;
      doc.backgroundImg = backgroundImg;
      doc.thumbnail = thumbnail;
      break;
    case 'vendorDoc':
      fs.rmSync(`public/pdfs/userDocs/${doc.path}`);
      if(req.file) doc.path = req.file.filename;
      break;
    case 'socialMediaLink':
      const { link, socialMediaLinkTypeId } = req.body
      doc.link = link;
      doc.socialMediaLinkTypeId = socialMediaLinkTypeId;
      break;
    default:
      break;
  };
};

exports.getAll = (Model) => catchAsync(async (req, res, next) => {
  let features = new APIFeatures({}, req.query)
  .filter()
  .sort()
  .limitFields()
  .paginate();

  features.query.include = getOptions(Model, req).include;
  
  // specify model wise options
  addConditionalWhereClause(Model, features, req);

  const docs = await Model.findAll(features.query);
  
  if(!docs.length) {
    return next(new AppError('Documents not found,', 404));
  }

  res.status(200).json(
  {
    status: 'success',
    results: docs.length,
    data: docs
  });
});

exports.createOne = Model => catchAsync(async (req, res, next) => {
  let options = getOptions(Model, req);
  const doc = await sequelize.transaction( async (t) => {
    // set options
    // if (Model.name === 'stockEntry') {
    //   options.transaction = t; 
    //   return await Model.create(entryObj, options);
    // } 
    // // By default we are not passing any transaction
    switch(Model.name) {
      case 'vendorDoc':
        req.body.userId = req.user.id;
        if(req.file) req.body.path = req.file.filename;
        break;
      case 'socialMediaLink':
        req.body.userId = req.user.id;
      default:
        break;
    };

    return await Model.create(req.body, options);
  });
  
  res.status(201).json(
    {
      status: 'success',
      data: doc
    }
  );  
});

exports.getOne = Model => catchAsync(async (req, res, next) => {

  const id = getId(Model, req);
  // Define options based on Model
  const options = getOptions(Model, req); 
  
  const doc = await Model.findByPk(id, options);
  if(!doc) {
   return next(new AppError('No document found with that ID', 404));
  }

  res.status(200).json(
    {
      status: 'success',
      data: doc
    }
  );
});

exports.updateOne = Model => catchAsync(async (req, res, next) => {

  const id = getId(Model, req);
  const options = getOptions(Model, req);

  let doc;
  doc = await Model.findByPk(id, options);
  
  // Throw error if document not found
  if(!doc) {
    return next(new AppError('No document found with that ID.'));
  }  
  
  let result = undefined;
  result = await sequelize.transaction(async t => {
    // Add transaction to options
    options.transaction = t;
    // Update fields
    updateProperties(Model, req, doc);
    return await doc.save(options);
  });
   
  // Send result
  res.status(200).json(
    {
      status: 'success',
      data: {
        result
      }
    }
  );
});

exports.deleteOne = Model => catchAsync(async (req, res, next) => {

  const id = getId(Model, req);
  // If deleting rsvpTemplate then
  // we also need to delete attached images
  if(Model.name === 'rsvpTemplate') {
    const doc = await Model.findByPk(id);
    fs.rmSync(`public/img/rsvpTemplates/${doc.backgroundImg}`);
    fs.rmSync(`public/img/rsvpTemplates/${doc.thumbnail}`);
  } else if(Model.name === 'vendorDoc') {
    const doc = await Model.findByPk(id);
    fs.rmSync(`public/pdfs/userDocs/${doc.path}`);
  }
  await Model.destroy({ where: { id } });

  // Send result
  res.status(204).json({
      status: 'success',
      data: null
    }
  );
});