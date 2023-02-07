const { DataTypes } = require("sequelize");

module.exports = ((sequelize, Sequelize) => {
  const SaleLineItem = sequelize.define("saleLineItem", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    qty: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    price: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    amount: {
      type: DataTypes.VIRTUAL,
      defaultValue: this.qty * this.price
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

  return SaleLineItem;
});
