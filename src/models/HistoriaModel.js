const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Historia = sequelize.define("Historia", {
  idHistoria: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  texto: { type: DataTypes.TEXT("long"), allowNull: false },
}, { timestamps: false });

module.exports = Historia;