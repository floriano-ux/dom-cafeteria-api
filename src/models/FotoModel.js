const { Schema, model } = require("mongoose");

const FotoSchema = new Schema(
  {
    nome: { type: String, required: true },
    foto_url: { type: String, required: true },
  },
  {
    collection: "Fotos",
    timestamps: false,
  }
);

module.exports = model("Foto", FotoSchema);
