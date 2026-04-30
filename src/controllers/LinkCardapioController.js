const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const LinkCardapio = sequelize.define("Link_Cardapio", {
  idLink: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  link: { type: DataTypes.STRING(255) },
}, { timestamps: false });

module.exports = LinkCardapio;