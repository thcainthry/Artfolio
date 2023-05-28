module.exports = (sequelize, DataTypes) => {
    const Shfaqjet_artikujt = sequelize.define("Shfaqjet_artikujt", {
      emri_shfaqjes: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      emri_artikullit: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      portali_tv: {
        type: DataTypes.STRING(40),
        primaryKey: true,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      data_publikimit: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
          isDate: true
        }
      }
    },
    {
      timestamps: false, // Exclude createdAt and updatedAt
    }
  );

  return Shfaqjet_artikujt;
};

  
