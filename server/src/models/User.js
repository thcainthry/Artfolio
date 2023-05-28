module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
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
        primaryKey: true,
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
    },
    {
      timestamps: false, // Exclude createdAt and updatedAt
    }
  );

  return Users;
};

  
  