const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Duvida = sequelize.define("Duvidas_Frequentes", {
  idDuvida: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  pergunta: { type: DataTypes.TEXT },
  resposta: { type: DataTypes.TEXT },
}, { timestamps: false });

module.exports = Duvida;