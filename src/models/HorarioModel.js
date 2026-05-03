const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Horario = sequelize.define("Horario", {
  idHorario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  dia: { type: DataTypes.STRING(50), allowNull: false },
  horario: { type: DataTypes.STRING(50), allowNull: false },
}, { timestamps: false });

module.exports = Horario;