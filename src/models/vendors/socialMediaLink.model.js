const { DataTypes } = require("sequelize");

module.exports = ((sequelize, Sequelize) => {
  const SocialMediaLink = sequelize.define("socialMediaLink", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    link: {
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

  return SocialMediaLink;
});
