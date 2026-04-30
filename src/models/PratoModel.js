const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Prato = sequelize.define("Pratos", {
  idPrato: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING(100) },
  foto_url: { type: DataTypes.TEXT("long"), allowNull: false },
}, { timestamps: false });

module.exports = Prato;