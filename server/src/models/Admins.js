module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define("Admin", {
      admin_username: {
        type: DataTypes.STRING(40),
        primaryKey: true,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING(40),
        allowNull: false,
        validate: {
          notEmpty: true,
          isEmail: true
        }
      }
    });
  
    return Admin;
  };
  
  