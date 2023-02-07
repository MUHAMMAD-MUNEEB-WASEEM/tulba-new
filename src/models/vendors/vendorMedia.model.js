const { DataTypes } = require("sequelize");

module.exports = ((sequelize, Sequelize) => {
  const VendorMedia = sequelize.define("vendorMedia", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.ENUM('image', 'video'),
      allowNull: false,
      validate: {
        isIn: [['image', 'video']]
      }
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false
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

  return VendorMedia;
});
