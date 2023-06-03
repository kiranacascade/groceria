"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Inventory.hasMany(models.Discount, {
        foreignKey: {
          name: "id_inventory",
        },
      });
      Inventory.hasMany(models.Inventory_History, {
        foreignKey: {
          name: "id_inventory",
        },
      });
    }
  }
  Inventory.init(
    {
      stock: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Inventory",
    }
  );
  return Inventory;
};
