const { DataTypes } = require("sequelize");

module.exports = ((sequelize, Sequelize) => {
  const VendorDocType = sequelize.define("vendorDocType", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.ENUM('registration certificate', 'ntn', 'cnic', 'utility bill'),
      allowNull: false,
      validate: {
        isIn: [['registration certificate', 'ntn', 'cnic', 'utility bill']]
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

  return VendorDocType;
});
