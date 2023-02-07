const fs = require('fs');
const db = require("../models");
const catchAsync = require('../utils/catchAsync');

exports.setup = catchAsync(async (req, res, next) => {

  // 1) SETUP - VENDOR CATEGORIES
  const vendorCategories = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/default-vendor-categories.json`));
  const inserted_vendorCategories = await db.vendorCategories.bulkCreate(vendorCategories);
  // 2) SETUP - VENUE CATEGORIES
  const venueCategories = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/default-venue-categories.json`));
  const inserted_venueCategories = await db.venueCategories.bulkCreate(venueCategories);
  // 3) SETUP - SOCIAL MEDIA LINK TYPES
  const socialMediaLinkTypes = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/default-social-media-link-types.json`));
  const inserted_socialMediaLinkTypes = await db.socialMediaLinkTypes.bulkCreate(socialMediaLinkTypes);
  // 4) SETUP - VENDOR DOC TYPES
  const vendorDocTypes = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/default-vendor-doc-types.json`));
  const inserted_vendorDocTypes = await db.vendorDocTypes.bulkCreate(vendorDocTypes);
  // 5) SETUP - AUTHENTICATION 
  const users = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/default-users.json`));
  const inserted_users = await db.users.bulkCreate(users);
  
  const data = {
    vendorCategories: {
      results: inserted_vendorCategories.length,
      data: inserted_vendorCategories
    },
    venueCategories: {
      results: inserted_venueCategories.length,
      data: inserted_venueCategories
    },
    socialMediaLinkTypes: {
      results: inserted_socialMediaLinkTypes.length,
      data: inserted_socialMediaLinkTypes
    },
    vendorDocTypes: {
      results: inserted_vendorDocTypes.length,
      data: inserted_vendorDocTypes
    },
    users: {
      results: inserted_users.length,
      data: inserted_users
    },
  };

  res.status(200).json(
    {
      status: 'success',
      message: 'Succussfuly created setup data. System Ready to be used Instantly.',
      data
    }
  );
});