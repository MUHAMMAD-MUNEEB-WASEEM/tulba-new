const { DataTypes } = require("sequelize");

module.exports = ((sequelize, Sequelize) => {
  const Wedding = sequelize.define("wedding", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    groom: {
      type: DataTypes.STRING
    },
    bride: {
      type: DataTypes.STRING
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

  Wedding.beforeCreate(async (wedding, options) => {
    if(options.user) {
      wedding.userId = options.user.id;
    }
  });

  return Wedding;
});
