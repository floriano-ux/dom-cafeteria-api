const { Schema, model } = require("mongoose");

const EspacoSchema = new Schema(
  {
    foto_url: { type: String, required: true },
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
  },
  {
    collection: "Espaco",
    timestamps: false,
  }
);

module.exports = model("Espaco", EspacoSchema);
