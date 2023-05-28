module.exports = (sequelize, DataTypes) => {
    const Images = sequelize.define("Images", {
      fotoja_shkrepur: {
        type: DataTypes.BLOB("long"),
        allowNull: false,
      },
      emri_fotos: {
        type: DataTypes.STRING(40),
        primaryKey: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      pershkrimi_fotos: {
        type: DataTypes.STRING(500),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      cmimi_fotos: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      koleksioni_fotos: {
        type: DataTypes.STRING(100),
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

  return Images;
};

  