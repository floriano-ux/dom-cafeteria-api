const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Espaco = sequelize.define("Espaco", {
  idEspaco: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  foto_url: { type: DataTypes.TEXT("long"), allowNull: false },
  titulo: { type: DataTypes.STRING(150), allowNull: false },
  descricao: { type: DataTypes.TEXT, allowNull: false },
}, { timestamps: false });

module.exports = Espaco;