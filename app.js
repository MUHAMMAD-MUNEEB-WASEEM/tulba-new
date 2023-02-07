const path = require('path');
const express=  require("express");
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');    
const xss = require('xss-clean');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const app = express();
const keys = require("./src/config/keys");

const AppError = require('./src/utils/appError');
const globalErrorHandler = require('./src/controllers/errorController');
const db = require("./src/models");

app.enable('trust proxy');

app.use(express.json({ limit: '20kb' }));
app.use(express.urlencoded({ limit: '20mb', extended: true }));
app.use(cookieParser());
app.use(cors())
app.locals.moment = require('moment');

if (keys.environment === 'development') {
  app.use(morgan('dev'));
};

app.use(helmet());
app.use(xss());

app.use(function(req, res, next) {
  res.setHeader("Content-Security-Policy", "script-src 'self' 'unsafe-eval' 'unsafe-inline' printjs-4de6.kxcdn.com cdnjs.cloudflare.com");
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type,set-cookie');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Cache-Control', 'no-cache');
  next();
});


const limiter = rateLimit({
  max: 20000,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);

const saRouter = require('./src/routes/sa/saRoutes');
const authRouter = require('./src/routes/auth/authRoutes');
const userRouter = require('./src/routes/auth/userRoutes');
const weddingRouter = require('./src/routes/wedding/weddingRoutes');
const rsvpTemplateRouter = require('./src/routes/wedding/rsvpTemplateRoutes'); 
const socialMediaLinkTypeRouter = require('./src/routes/vendors/socialMediaLinkTypeRoutes');
const vendorCategoryRouter = require('./src/routes/vendors/vendorCategoryRoutes');
const venueCategoryRouter = require('./src/routes/vendors/venueCategoryRoutes');
const vendorDocTypeRouter = require('./src/routes/vendors/vendorDocTypeRoutes');

app.use('/api/v1/sa', saRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/weddings', weddingRouter);
app.use('/api/v1/rsvpTemplates', rsvpTemplateRouter);
app.use('/api/v1/socialMediaLinkTypes', socialMediaLinkTypeRouter);
app.use('/api/v1/vendorCategories', vendorCategoryRouter);
app.use('/api/v1/venueCategories', venueCategoryRouter);
app.use('/api/v1/vendorDocTypes', vendorDocTypeRouter);

// try{
//   (async () => {
//     if (keys.environment === 'development') {
//       await db.sequelize.sync({ 
//         // force: true 
//       }); 
//     } else {
//       await db.sequelize.sync({
//         // force: true
//       });
//     }
    
//     console.log(`DB synched (${db.length}) tables successfully...`);
//   })();
// } catch (err) {
//   console.log(err.message);
// }

app.use(compression());
app.use((req, res, next) => {
  req.requestedAt = new Date().toISOString();
  // console.log(req.headers);
  next();
});

app.use(globalErrorHandler);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});


module.exports = app;