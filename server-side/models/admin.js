"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Admin.belongsTo(models.Branch, {
        foreignKey: {
          name: "id_branch",
        },
      });
    }
  }
  Admin.init(
    {
      admin_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM,
        values: ["super", "branch"],
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Admin",
    }
  );
  return Admin;
};
