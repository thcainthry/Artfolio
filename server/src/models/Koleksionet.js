module.exports = (sequelize, DataTypes) => {
    const Koleksionet = sequelize.define("Koleksionet", {
      emri_koleksionit: {
        type: DataTypes.STRING(100),
        primaryKey: true,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      data_fillimit: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
          isDate: true
        }
      },
      data_mbarimit: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
          isDate: true
        }
      }
    });
  
    return Koleksionet;
  };
  