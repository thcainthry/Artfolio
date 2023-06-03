module.exports = (sequelize, DataTypes) => {
    const Admins = sequelize.define("Admins", {
      admin_username: {
        type: DataTypes.STRING(40),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING(40),
        allowNull: false,
        validate: {
          notEmpty: true,
          isEmail: true,
        },
      },
    },
    {
      timestamps: false, // Exclude createdAt and updatedAt
    }
  );

  return Admins;
};

  