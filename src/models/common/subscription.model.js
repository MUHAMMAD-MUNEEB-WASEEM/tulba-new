const { DataTypes } = require("sequelize");

module.exports = ((sequelize, Sequelize) => {
  const Subscription = sequelize.define("subscription", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status: {
      type: DataTypes.ENUM('active', 'in-active'),
      allowNull: false,
      validate: {
        isIn: [['active', 'in-active']]
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

  return Subscription;
});
