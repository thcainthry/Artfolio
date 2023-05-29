module.exports = (sequelize, DataTypes) => {
    const Guest = sequelize.define("Guest", {
      emri: {
        type: DataTypes.STRING(40),
        primaryKey: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      mbiemri: {
        type: DataTypes.STRING(40),
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
      ditelindja: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
          isDate: true,
        },
      },
      adresa: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      zip_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      city: {
        type: DataTypes.STRING(255),
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

  return Guest;
};
