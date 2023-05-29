module.exports = (sequelize, DataTypes) => {
    const Koleksionet = sequelize.define("Koleksionet", {
      // leja 1 id secilit koleksion se duhet
      
      
      emri_koleksionit: {
        type: DataTypes.STRING(100),
        primaryKey: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      data_fillimit: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
          isDate: true,
        },
      },
      data_mbarimit: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
          isDate: true,
        },
      },
    },
    {
      timestamps: false, // Exclude createdAt and updatedAt
    }
  );

  return Koleksionet;
};

  