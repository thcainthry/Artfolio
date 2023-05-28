module.exports = (sequelize, DataTypes) => {
    const Na_kontakto = sequelize.define("Na_kontakto", {
      name: {
        type: DataTypes.STRING(100),
        primaryKey: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING(40),
        primaryKey: true,
        allowNull: false,
        validate: {
          notEmpty: true,
          isEmail: true,
        },
      },
      message: {
        type: DataTypes.STRING(400),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      timestamps: false, // Exclude createdAt and updatedAt
    }
  );

  return Na_kontakto;
};

  