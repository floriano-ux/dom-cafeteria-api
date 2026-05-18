const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ContatoHeader = sequelize.define("Contato_Header", {
  idHeader: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  titulo: { type: DataTypes.STRING(150), allowNull: false },
  subtitulo: { type: DataTypes.TEXT, allowNull: false },
}, 
{
  timestamps: false,
  tableName: "Contato_Header",
  freezeTableName: true,
});


module.exports = ContatoHeader;