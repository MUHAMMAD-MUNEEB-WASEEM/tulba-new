const { DataTypes } = require("sequelize");

module.exports = ((sequelize, Sequelize) => {
  const Wishlist = sequelize.define("wishlist", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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

  return Wishlist;
});
