const { DataTypes } = require("sequelize");

module.exports = ((sequelize, Sequelize) => {
  const WeddingEvent = sequelize.define("weddingEvent", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.ENUM('nikaah', 'walima'),
      allowNull: false,
      validate: {
        isIn: [['nikaah', 'walima']]
      }
    },
    eventDate: {
      type: DataTypes.DATE
    },
    eventTime: {
      type: DataTypes.TIME
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

  WeddingEvent.beforeCreate(async (weddingEvent, options) => {
    if(options.weddingId) {
      weddingEvent.weddingId = options.weddingId;
    }
  });

  return WeddingEvent;
});
