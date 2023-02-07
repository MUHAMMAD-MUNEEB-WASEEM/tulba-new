const { DataTypes } = require("sequelize");

module.exports = ((sequelize, Sequelize) => {
  const Task = sequelize.define("task", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    taskDate: {
      type: DataTypes.DATE
    },
    taskTime: {
      type: DataTypes.TIME
    },
    notes: {
      type: DataTypes.TEXT
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

  return Task;
});
