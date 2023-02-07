const { Op } = require("sequelize");
const { Sequelize, DOUBLE, DataTypes } = require("sequelize");
const keys = require('../config/keys');

let sequelize;
const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $is: Op.is,
  $not: Op.not,
  $gt: Op.gt,
  $gte: Op.gte,
  $lt: Op.lt,
  $lte: Op.lte
};

const hooks = {
  beforeCreate (instance, options) {
    if(options.user) {
      instance.createdBy = options.user.id;
    }
  },
  beforeUpdate (instance, options) {
    if(options.user) {
      instance.updatedBy = options.user.id;
    }
  }
};

if(keys.environment === 'development') {
  // DB configuration for DEVELOPEMENT
  sequelize = new Sequelize(keys.db, keys.dbUser, keys.dbPassword, {
    
    host: keys.dbHost,
    dialect: 'mysql',
    operatorsAliases,
    define: {
      hooks
    }
  });
} else {
    // DB configuration for PRODUCTION
    sequelize = new Sequelize(keys.db, keys.dbUser, keys.dbPassword, {
    host: keys.dbHost,
    dialect: 'mysql',
    operatorsAliases,
    define: {
      hooks
    }
  });
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// 1. AUTH ===============================================================================================
// 1.1 Initiate Models
db.users = (require('./auth/user.model'))(sequelize, Sequelize);
// db.subscriptions = (require('./common/subscription.model'))(sequelize, Sequelize);
// db.subscriptionPlans = (require('./common/subscriptionPlan.model'))(sequelize, Sequelize);
// db.orders = (require('./shop/order.model'))(sequelize, Sequelize);
// db.favorites = (require('./common/favorite.model'))(sequelize, Sequelize);
// db.wishlists = (require('./common/wishlist.model'))(sequelize, Sequelize);
// db.payments = (require('./common/payment.model'))(sequelize, Sequelize);
// db.shoppingCart = (require('./shop/shoppingCart.model'))(sequelize, Sequelize);
// db.saleLineItems = (require('./shop/saleLineItem.model'))(sequelize, Sequelize);
db.vendorProfiles = (require('./vendors/vendorProfile.model'))(sequelize, Sequelize);
db.vendorDocTypes = (require('./vendors/vendorDocType.model'))(sequelize, Sequelize);
db.vendorDocs = (require('./vendors/vendorDoc.model'))(sequelize, Sequelize);
// db.vendorMedias = (require('./vendors/vendorMedia.model'))(sequelize, Sequelize);
db.socialMediaLinkTypes = (require('./vendors/socialMediaLinkType.model'))(sequelize, Sequelize);
db.socialMediaLinks = (require('./vendors/socialMediaLink.model'))(sequelize, Sequelize);
db.vendorCategories = (require('./vendors/vendorCategory.model'))(sequelize, Sequelize);
db.venueCategories = (require('./vendors/venueCategory.model'))(sequelize, Sequelize);
// db.venues = (require('./vendors/venue.model'))(sequelize, Sequelize);
// db.venueFacilities = (require('./vendors/venueFacility.model'))(sequelize, Sequelize);
// db.paymentGateways = (require('./serviceProviders/paymentGateway.model'))(sequelize, Sequelize);
// db.deliveryServices = (require('./serviceProviders/deliveryService.model'))(sequelize, Sequelize);
// db.items = (require('./shop/item.model'))(sequelize, Sequelize);
// db.categories = (require('./shop/category.model'))(sequelize, Sequelize);
db.weddings = (require('./wedding/wedding.model'))(sequelize, Sequelize);
db.weddingEvents = (require('./wedding/weddingEvent.model'))(sequelize, Sequelize);
db.rsvps = (require('./wedding/rsvp.model'))(sequelize, Sequelize);
db.tasks = (require('./wedding/task.model'))(sequelize, Sequelize);
db.rsvpTemplates = (require('./wedding/rsvpTemplate.model'))(sequelize, Sequelize);

// 1.2 db.length must be INITIALIZED with 1
db.length = 28;

// 1.3 Define Association
// db.subscriptions.subscriptionPlan = db.subscriptionPlans.belongsTo(db.subscriptions);
// db.users.subscription = db.subscriptions.belongsTo(db.users);
// db.users.orders = db.users.hasMany(db.orders);
// db.orders.saleLineItems = db.orders.hasMany(db.saleLineItems);
// db.users.favorites = db.users.hasMany(db.favorites);
// db.users.wishlists = db.users.hasMany(db.wishlists);
// db.users.payments = db.users.hasMany(db.payments);
// db.users.shoppingCart = db.shoppingCart.belongsTo(db.users);
// db.shoppingCart.saleLineItems = db.shoppingCart.hasMany(db.saleLineItems);
// db.saleLineItems.item = db.saleLineItems.hasMany(db.items);
// db.categories.items = db.categories.hasMany(db.items);
// db.items.category = db.items.belongsTo(db.categories);
// db.orders.saleLineItems = db.orders.hasMany(db.saleLineItems);
db.users.profile = db.vendorProfiles.belongsTo(db.users);
db.users.docs = db.users.hasMany(db.vendorDocs);
db.vendorDocs.type = db.vendorDocs.belongsTo(db.vendorDocTypes);
// db.users.media = db.users.hasMany(db.vendorMedias);
db.users.socialMediaLinks = db.users.hasMany(db.socialMediaLinks);
db.socialMediaLinks.type = db.socialMediaLinks.belongsTo(db.socialMediaLinkTypes);
db.users.vendorCategy = db.users.belongsTo(db.vendorCategories);
db.vendorCategories.vendors = db.vendorCategories.hasMany(db.users);
// db.vendorCategories.vendors = db.vendorCategories.hasMany(db.users);
// db.users.venue = db.venues.belongsTo(db.users);
// db.venues.venueCategory = db.venueCategories.belongsTo(db.venues);
// db.venueCategories.venues = db.venueCategories.hasMany(db.venues);
// db.venues.facilities = db.venues.hasMany(db.venueFacilities);
// db.paymentGateways.payments = db.paymentGateways.hasMany(db.payments);
// db.deliveryServices.payments = db.deliveryServices.hasMany(db.payments);
db.users.weddings = db.users.hasMany(db.weddings);
db.weddings.events = db.weddings.hasMany(db.weddingEvents);
db.weddings.tasks = db.weddings.hasMany(db.tasks);
db.weddingEvents.rsvps = db.weddingEvents.hasMany(db.rsvps);
db.weddingEvents.template = db.rsvpTemplates.hasMany(db.weddingEvents);
// --------------------------------------------------------------------
module.exports = db;