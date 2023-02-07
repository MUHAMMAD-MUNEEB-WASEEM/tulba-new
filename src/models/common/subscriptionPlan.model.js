const { DataTypes } = require("sequelize");

module.exports = ((sequelize, Sequelize) => {
  const SubscriptionPlan = sequelize.define("subscriptionPlan", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    plan: {
      type: DataTypes.ENUM('monthly', 'quarterly', 'bi-annually', 'annually'),
      allowNull: false,
      validate: {
        isIn: [['monthly', 'quarterly', 'bi-annually', 'annually']]
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

  return SubscriptionPlan;
});
