// prod.js - production keys here!!!
module.exports = {
  db: process.env.DB,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  cookieKey: process.env.COOKIE_KEY,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN,
  jwtCookieExpiresIn: process.env.JWT_COOKIE_EXPIRES_IN,
  emailUsername: process.env.GMAIL_USERNAME,
  emailPassword: process.env.GMAIL_PASSWORD,
  emailHost: process.env.emailHost,
  emailPort: process.env.emailPort,
  environment: process.env.NODE_ENV
};