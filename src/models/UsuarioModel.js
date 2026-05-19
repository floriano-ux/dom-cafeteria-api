const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Usuario = sequelize.define("Usuarios", {
  idUsuarios: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING(255), allowNull: false },
  email: { type: DataTypes.STRING(255), allowNull: false },
  senha_hash: { type: DataTypes.STRING(255), allowNull: false },
  telefone: { type: DataTypes.STRING(45), allowNull: false },
}, 
{
  timestamps: false,
  tableName: "Usuarios",
  freezeTableName: true,
});


module.exports = Usuario;


