const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ContatoInfo = sequelize.define("Contato_Info", {
  idContato: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  whatsapp: { type: DataTypes.STRING(20), allowNull: false },
  whatsapp_link: { type: DataTypes.STRING(255) },
  instagram: { type: DataTypes.STRING(100), allowNull: false },
  localizacao: { type: DataTypes.STRING(255), allowNull: false },
}, { timestamps: false });

module.exports = ContatoInfo;