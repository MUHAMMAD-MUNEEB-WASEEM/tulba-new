const { DataTypes } = require("sequelize");

module.exports = ((sequelize, Sequelize) => {
  const SocialMediaLinkType = sequelize.define("socialMediaLinkType", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.ENUM('twitter', 'facebook', 'instagram', 'linkedin', 'youtube'),
      allowNull: false,
      validate: {
        isIn: [['twitter', 'facebook', 'instagram', 'linkedin', 'youtube']]
      }
    },
    icon: {
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

  return SocialMediaLinkType;
});
