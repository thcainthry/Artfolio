module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      emri: {
        type: DataTypes.STRING(40),
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      mbiemri: {
        type: DataTypes.STRING(40),
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      username: {
        type: DataTypes.STRING(40),
        primaryKey: true, // Designate 'username' as the primary key
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      password: {
        type: DataTypes.STRING(225),
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING(225),
        allowNull: false,
        validate: {
          notEmpty: true,
          isEmail: true // Additional validation for email format
        }
      },
      ditelindja: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
          isDate: true // Additional validation for date format
        }
      }
    });
  
    return User;
  };
  
  