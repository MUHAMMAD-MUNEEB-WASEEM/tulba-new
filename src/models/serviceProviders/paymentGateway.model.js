const { DataTypes } = require("sequelize");

module.exports = ((sequelize, Sequelize) => {
  const PaymentGateway = sequelize.define("paymentGateway", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
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

  return PaymentGateway;
});
