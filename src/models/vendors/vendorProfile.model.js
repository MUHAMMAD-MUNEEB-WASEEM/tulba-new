const { DataTypes } = require("sequelize");

module.exports = ((sequelize, Sequelize) => {
  const VendorProfile = sequelize.define("vendorProfile", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    businessName: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    contactPerson: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    tel: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10]
      }
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [11]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    streetAddress: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    city: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    stateProvince: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    country: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    locationLat: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      validate: {
        min: -180,
        max: 180
      }
    },
    locationLng: { 
      type: DataTypes.FLOAT,
      defaultValue: 0,
      validate: {
        min: -180,
        max: 180
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

  return VendorProfile;
});
