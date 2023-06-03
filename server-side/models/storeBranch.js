"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Branch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Branch.hasMany(models.Admin, {
        foreignKey: {
          name: "id_branch",
        },
      });
    }
  }
  Branch.init(
    {
      branch_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_city: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_province: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      latitude: {
        type: DataTypes.FLOAT(10, 6),
        allowNull: false,
      },
      longitude: {
        type: DataTypes.FLOAT(10, 6),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Branch",
    }
  );
  return Branch;
};
