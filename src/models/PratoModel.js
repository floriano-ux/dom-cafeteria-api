const { Schema, model } = require("mongoose");

const PratoSchema = new Schema(
  {
    nome: { type: String },
    foto_url: { type: String, required: true },
  },
  {
    collection: "Pratos",
    timestamps: false,
  }
);

module.exports = model("Prato", PratoSchema);
