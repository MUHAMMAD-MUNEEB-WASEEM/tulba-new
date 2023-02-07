const { promisify } = require('util');
const db = require("../../models");
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');
const keys = require('../../config/keys');
const sendEmail = require('../../utils/email');
const { Op } = require('sequelize');

const signToken = (id) => {
  return jwt.sign({ id }, keys.jwtSecret, {
    expiresIn: keys.jwtExpiresIn
  });
};

const putJwtOnCookie = (token, res) => {
  const cookieOptions = {
    expires: new Date(Date.now() + keys.jwtCookieExpiresIn * 60 * 60 * 1000),
    httpOnly: true,
    // secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
  };
  // Use below option if deploying on https
  // x-forwarded-proto is heroku specific
  
  res.cookie('jwt', token, cookieOptions);
};

const createAndSendToken = (user, statusCode, res) => {
  const token = signToken(user.id);
  putJwtOnCookie(token, res);

  // Remove the password from the output
  user.password = undefined;
  user.passwordConfirm = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user
    }
  });
}

const changedPasswordAfter = function(passwordChangedAt, JWTTimeStamp) {
  if(passwordChangedAt) {
    const changedTimeStamp = parseInt(passwordChangedAt.getTime() / 1000, 10);
    return JWTTimeStamp < changedTimeStamp;
  }

  return false;
};
 
exports.signup = catchAsync(async(req, res, next) => {
  // 1) Create new user
  const newUser = await db.users.create(req.body);
  
  // 2) Log user in, send JWT
  createAndSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {

  const { email, password } = req.body;

  // 1) Check if username and password exist
  if(!email || !password) {
    return next(new AppError('Please provide email and password!', 400));
  }
  
  // 2) Check if user exists and password is correct
  const user = await db.users.findOne({ where: { email, status: 'active'}});
  
  if(!user || !(await bcrypt.compare(password, user.dataValues.password))) {
    return next(new AppError('Incorrect username or password', 401));
  }

  // 3) Log user in, send JWT
  createAndSendToken(user, 200, res);
});

exports.logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10  * 1000),
    httpOnly: true
  });
  res.status(200).json({ status: 'success' });
}

exports.protect = catchAsync(async (req, res, next) => {
  // 1) Getting token and check if it's there
  let token;
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } else if(req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if(!token) {
    return next(new AppError('You are not logged in! Please login to get access.', 401));
  }
  // 2) Velidate Token
  const decoded = await promisify(jwt.verify)(token, keys.jwtSecret);
  
  // 3) Check if user still exists 
  const currentUser = await db.users.findByPk(decoded.id);
  if(!currentUser) {
    return next(new AppError('The user belonging to this token does no longer exist', 401));
  }

  // 4) Check if user changed password after the token was issued
  if(changedPasswordAfter(currentUser.passwordChangedAt, decoded.iat)) {
    return next(new AppError('User recently changed password! Please log in again.', 401));
  };

  currentUser.password = undefined;
  currentUser.passwordConfirm = undefined;
  
  // Grant access to the protected route
  req.user = currentUser;
  next();
});

exports.restrictTo = (...userRoles) => {
  return (req, res, next) => {
    if(!userRoles.includes(req.user.userRole)) {
      return next(new AppError('You do not have permission to perform this action', 403));
    }
    next();
  }
}

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on posted email
  const user = await db.users.findOne({ where: { email: req.body.email }});
  if(!user) {
    return next(new AppError('There is no user with that email address.', 404));
  }
  // 2) Generate the random rest token
  const resetToken = crypto.randomBytes(32).toString('hex');
  user.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  // Token expires after 10 minutes
  user.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  await user.save();
  // 3) Send it to user's email
  const resetURL = `${req.protocol}://${req.get('host')}/api/v1/auth/resetPassword/${resetToken}`;
  const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forgot your password, please ignore this email!`;

    try{
      await sendEmail({
        email: user.email,
        subject: 'Your password reset token (valid for 10 min)',
        message
      });
    } catch (err) {
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      user.save();
      return next(new AppError('There was an error sending the email. Try again later!'), 500);
    }

    res.status(200).json({
      status: 'success',
      message: 'Token sent to email!'
    });
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on the token
  const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
  const user = await db.users.findOne({ where: { passwordResetToken: hashedToken, passwordResetExpires: { [Op.gt]: Date.now() } }});

  // 2) If token has not expired, and there is user, set the new password
  if(!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;

  user.passwordResetToken = null;
  user.passwordResetExpires = null;
  await user.save();

  // 3) Log user in, send JWT
  createAndSendToken(user, 200, res);
});

exports.updatePassword = catchAsync(async(req, res, next) => {
  const { oldPassword, newPassword, confirmPassword } = req.body;
  // 1) Get user from collection
  const user = await db.users.findByPk(req.user.id);

  // 2) Check if posted password is correct
  if(!user || !(await bcrypt.compare(oldPassword, user.dataValues.password))) {
    return next(new AppError('Your current password is wrong', 401));
  }

  // 3) If so, update the password
  user.password = req.body.newPassword;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  // 4) Log user in, send JWT
  createAndSendToken(user, 200, res);
});