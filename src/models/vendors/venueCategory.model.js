const { DataTypes } = require("sequelize");

module.exports = ((sequelize, Sequelize) => {
  const VenueCategory = sequelize.define("venueCategory", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.ENUM('marriage halls', 'canopies', 'farm houses', 'restaurants', 'shamiana systems'),
      allowNull: false,
      validate: {
        isIn: [['marriage halls', 'canopies', 'farm houses', 'restaurants', 'shamiana systems']]
      }
    },
    createdBy: {
      type: DataTypes.INTEGER,
      defaultValue: -1
    },
    updatedBy: {
      type: Sequelize.INTEGER,
      defaultValue: -1
    }
  }, {
    underscored: true
  });

  return VenueCategory;
});
