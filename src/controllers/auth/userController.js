const fs = require('fs');
const multer = require('multer');
const sharp = require('sharp');
const db = require("../../models");
const bcrypt = require('bcryptjs');
const catchAsync = require('../../utils/catchAsync');
const Sequelize = require('sequelize');
const factory = require('../handlerFactory');
const AppError = require('../../utils/appError');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if(file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({ 
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.uploadUserPhoto = upload.single('photo');

exports.resizeUserPhoto = catchAsync(async(req, res, next) => {
  if(!req.file) return next();

  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({quality: 90})
    .toFile(`public/img/users/${req.file.filename}`);

  next();
});

exports.updatePhoto = catchAsync(async (req, res, next) => {
  const user = await db.users.findByPk(req.user.id);

  if(user && req.file) {
    if(user.photo !== 'default.jpeg') {
      // Delete previous user photo
      fs.rmSync(`public/img/users/${user.photo}`);
    }

    user.photo = req.file.filename;
    await user.save();
  }

  res.status(201).json(
    {
      status: 'success',
      msg: `Photo uploaded successfully!`
    }
  );
});

const Op = Sequelize.Op;

exports.checkId = factory.checkId(db.users);
exports.createUser = factory.createOne(db.users);
exports.getAllUsers = factory.getAll(db.users);

exports.toggleStatus = catchAsync(async (req, res, next) => {
  const id = req.params.id * 1;

  const user = await db.users.findByPk(id);

  if (user.status === 'active') {
    user.status = 'in-active';
  } else if (user.status === 'in-active'){
    user.status = 'active';
  }
  
  await user.save({ user: req.user });

  res.status(201).json(
    {
      status: 'success',
      message: `Status updated successfully!`
    }
  );
});

exports.changePassword = catchAsync(async (req, res, next) => {
  const id = req.params.id * 1;
  const { password } = req.body;
  
  const user = await db.users.findByPk(id);

  user.password = await bcrypt.hash(password, 12);
  
  await user.save({ user: req.user });

  res.status(201).json(
    {
      status: 'success',
      msg: `Password updated successfully!`
    }
  );
});