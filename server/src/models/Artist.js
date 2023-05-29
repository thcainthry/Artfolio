module.exports = (sequelize, DataTypes) => {
    const Artist = sequelize.define("Artist", {
      emri_artistit: {
        type: DataTypes.STRING(40),
        primaryKey: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      mbiemri_artistit: {
        type: DataTypes.STRING(40),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      vendi_lindjes: {
        type: DataTypes.STRING(40),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      biografia: {
        type: DataTypes.STRING(500),
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

  return Artist;
};

  