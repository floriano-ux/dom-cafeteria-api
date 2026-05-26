const { Schema, model } = require("mongoose");

const InicioSchema = new Schema(
  {
    foto: { type: String, required: true },
    texto: { type: String, required: true },
  },
  {
    collection: "Inicio",
    timestamps: false,
  }
);

module.exports = model("Inicio", InicioSchema);
