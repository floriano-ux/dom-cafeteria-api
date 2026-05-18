const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Foto = sequelize.define("Fotos", {
  idFotos: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING(150), allowNull: false },
  foto_url: { type: DataTypes.TEXT("long"), allowNull: false },
},
 {
  timestamps: false,
  tableName: "Fotos",
  freezeTableName: true,
});


module.exports = Foto;