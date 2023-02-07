const { DataTypes } = require("sequelize");

module.exports = ((sequelize, Sequelize) => {
  const Order = sequelize.define("order", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status: {
      type: DataTypes.ENUM('pending', 'dispatched', 'completed'),
      allowNull: false,
      validate: {
        isIn: [['pending', 'dispatched', 'completed']]
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

  return Order;
});
