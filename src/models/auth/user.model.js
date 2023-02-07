const { DataTypes } = require("sequelize");
const bcrypt = require('bcryptjs');
const AppError = require('../../utils/appError');

module.exports = ((sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    userRole: {
      type: DataTypes.ENUM('super-admin', 'admin', 'user', 'vendor', 'guest'),
      allowNull: false,
      validate: {
        isIn: [['super-admin', 'admin', 'user', 'vendor', 'guest']]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passwordConfirm: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      validate: {
        // This only works on CREATE and SAVE!!!
        customValidator(el){
          if(el !== this.password)
          {
            throw new AppError('Passwords are not the same');
          }
        }
      }
    },
    photo: {
      type: DataTypes.STRING,
      defaultValue: 'default.jpeg'
    },
    status: {
      type: DataTypes.ENUM('active', 'in-active'),
      allowNull: false,
      validate: {
        isIn: [['active', 'in-active']]
      }
    },
    passwordChangedAt: {
      type: DataTypes.DATE
    },
    passwordResetToken: {
      type: DataTypes.STRING
    },
    passwordResetExpires: {
      type: DataTypes.DATE
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

  User.beforeBulkCreate(async (users, options) => {
    for(const user of users) {
      user.password = await bcrypt.hash(user.password, 12);
      user.passwordChangedAt = Date.now();
      user.passwordConfirm = undefined;
    }
  });

  User.beforeSave(async (user, options) => {
    if(!user.changed('password')) return;

    user.password = await bcrypt.hash(user.password, 12);
    // Subtracting 1 second to ensure token is always
    // created after the password has changed
    user.passwordChangedAt = Date.now() - 1000;
    // The following line of code is only needed
    // for resetPassword to work properly, otherwise
    // password confirmation does not pass the validation
    user.passwordConfirm = user.password;
  });

  return User;
});
