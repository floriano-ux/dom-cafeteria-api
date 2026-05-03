const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Inicio = sequelize.define("Inicio", {
  idInicio: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  foto: { type: DataTypes.TEXT("long"), allowNull: false },
  texto: { type: DataTypes.TEXT, allowNull: false },
}, { timestamps: false });

module.exports = Inicio;