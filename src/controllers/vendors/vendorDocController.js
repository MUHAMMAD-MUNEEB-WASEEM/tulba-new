const fs = require('fs');
const multer = require('multer');
const db = require("../../models");
const factory = require('../handlerFactory');
const AppError = require('../../utils/appError');
const catchAsync = require('../../utils/catchAsync');

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/pdfs/userDocs');
  },
  filename: (req, file, cb) => {
    // user-[userId]-timestamp-docs-[doctypeId].pdf
    const ext = file.mimetype.split('/')[1];
    cb(null, `user-${req.user.id}-${Date.now()}-docs.${ext}`)
  }
});

const multerFilter = (req, file, cb) => {
  if(file.mimetype.startsWith('application/pdf')) {
    cb(null, true);
  } else {
    cb(new AppError('Not a PDF Document! Please upload only PDF Documents.', 400), false);
  }
};

const upload = multer({ 
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.uploadDocument = upload.single('pdfDoc');

exports.checkDuplicateDoc = catchAsync(async(req, res, next) => {
  const doc = await db.vendorDocs.findAll({ where: { userId: req.user.id, vendorDocTypeId: req.body.vendorDocTypeId }});

  if(doc.length > 0) {
    // Document already exists, cannot create duplicate document
    // So we need to delete the uploaded document
    fs.rmSync(`public/pdfs/userDocs/${req.file.filename}`);
    return next(new AppError('Can not add duplicate document. Document already exists.'));
  }
  next();
});

exports.checkId = factory.checkId(db.vendorDocs);
exports.getAllVendorDocsByVendor = factory.getAll(db.vendorDocs);
exports.createVendorDoc = factory.createOne(db.vendorDocs);
exports.getVendorDoc = factory.getOne(db.vendorDocs);
exports.updateVendorDoc = factory.updateOne(db.vendorDocs);
exports.deleteVendorDoc = factory.deleteOne(db.vendorDocs);