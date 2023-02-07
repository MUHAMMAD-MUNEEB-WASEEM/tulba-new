const keys = require("../config/keys");
const AppError = require("../utils/appError");

const handleDBError = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);

  const message = errors.join('. ');
  return new AppError(message, 400);
}

const handleJWTError = () => new AppError('Invalid token. Please log in again!', 401);
const handleJWTExpiredError = () => new AppError('Your token has expired. Please log in again!', 401);

const sendErrorDev = (err, req, res) => {
  // a) API
  if(req.originalUrl.startsWith('/api')) {
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      statusCode: err.statusCode,
      stack: err.stack,
    });
  } 
  // b) RENDERED WEBSITE
  console.error('ERROR: ', err);
  return res.status(err.statusCode).render('error', {
    title: 'Something went wrong!',
    statusCode: err.statusCode,
    msg: err.message
  });
}

const sendErrorProd = (err, req, res) => {
  // a) API
  if(req.originalUrl.startsWith('/api')) {
    // a) Operational, trusted error: send message to the client
    if(err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        statusCode: err.statusCode,
        message: err.message
      });
    } 
    // b) Programming or other unknown error: don't leak error details
    // 1) Log Error
    console.error('ERROR: ', err);
    // 2) Send generic error
    return res.status(500).json({
      status: 'error',
      statusCode: 500,
      message: 'Something went very wrong!'
    });
  }
  // b) RENDERED WEBSITE
  if(err.isOperational) {
    return res.status(err.statusCode).render('error', {
      title: 'Something went wrong!',
      statusCode: err.statusCode,
      msg: err.message
    });
  } 
  // Programming or other unknown error: don't leak error details
  // 1) Log Error
  console.error('ERROR: ', err);
  // 2) Send generic error
  return res.status(err.statusCode).json({
    title: 'Something went wrong!',
    statusCode: err.statusCode,
    message: 'Please try again later'
  });
}

module.exports = (err, req, res, next) => {

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if(keys.environment === 'development') {
    sendErrorDev(err, req, res);
  } else if(keys.environment === 'production') {
    let error = { ...err };
    error.message = err.message;
    
    if(error.name) {
      if(error.name.startsWith('Sequelize')) error = handleDBError(error);
      if(error.name === 'JsonWebTokenError') error = handleJWTError();
      if(error.name === 'TokenExpiredError') error = handleJWTExpiredError();
    }
    
    sendErrorProd(error, req, res);
  }
}