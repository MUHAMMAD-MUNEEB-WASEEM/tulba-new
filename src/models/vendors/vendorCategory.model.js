const { DataTypes } = require("sequelize");

module.exports = ((sequelize, Sequelize) => {
  const VendorCategory = sequelize.define("vendorCategory", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.ENUM('venues', 'caterors', 'decorators', 'musicians'),
      allowNull: false,
      validate: {
        isIn: [['venues', 'caterors', 'decorators', 'musicians']]
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

  return VendorCategory;
});
