module.exports = (sequelize, DataTypes) => {
    const Paintings = sequelize.define("Paintings", {
      fotoja_piktures: {
        type: DataTypes.BLOB('long'),
        allowNull: false
      },
      emri_piktures: {
        type: DataTypes.STRING(40),
        primaryKey: true,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      pershkrimi_piktures: {
        type: DataTypes.STRING(500),
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      cimimi_piktures: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      koleksioni_piktures: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      dimensionet: {
        type: DataTypes.STRING(40),
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },
    {
      timestamps: false, // Exclude createdAt and updatedAt
    }
  );

  return Paintings;
};

  