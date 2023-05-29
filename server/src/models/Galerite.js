module.exports = (sequelize, DataTypes) => {
    const Galerite = sequelize.define("Galerite", {
      emri_galerise: {
        type: DataTypes.STRING(40),
        primaryKey: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      vendi: {
        type: DataTypes.STRING(40),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      data_fillimit_g: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
          isDate: true,
        },
      },
      data_mbarimit_g: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
          isDate: true,
        },
      },
      koleksioni_shfaqur: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      piktura_shfaqur: {
        type: DataTypes.STRING(40),
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

  return Galerite;
};

  