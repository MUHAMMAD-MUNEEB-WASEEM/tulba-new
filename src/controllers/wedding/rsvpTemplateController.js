const multer = require('multer');
const sharp = require('sharp');
const db = require("../../models");
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

exports.uploadTemplateImages = upload.fields([
  { name: 'backgroundImg', maxCount: 1 },
  { name: 'thumbnail', maxCount: 1 }
]);

exports.resizeTemplateImages = async(req, res, next) => {
  if(!req.files.backgroundImg || !req.files.thumbnail) return next();

  // 1) Background Image
  req.body.backgroundImg = `rsvp-template-${Date.now()}-bg.jpeg`;
  await sharp(req.files.backgroundImg[0].buffer)
    .resize(2000, 1333)
    .toFormat('jpeg')
    .jpeg({quality: 90})
    .toFile(`public/img/rsvpTemplates/${req.body.backgroundImg}`);

  // 2) Thumbnail
  req.body.thumbnail = `rsvp-template-${Date.now()}-thumbnail.jpeg`;
  await sharp(req.files.thumbnail[0].buffer)
    .resize(500, 333)
    .toFormat('jpeg')
    .jpeg({quality: 90})
    .toFile(`public/img/rsvpTemplates/${req.body.thumbnail}`);

  next();
};

exports.checkId = factory.checkId(db.rsvpTemplates);
exports.getAllRSVPTemplates = factory.getAll(db.rsvpTemplates);
exports.createRSVPTemplate = factory.createOne(db.rsvpTemplates);
exports.getRSVPTemplate = factory.getOne(db.rsvpTemplates);
exports.updateRSVPTemplate = factory.updateOne(db.rsvpTemplates);
exports.deleteRSVPTemplate = factory.deleteOne(db.rsvpTemplates);