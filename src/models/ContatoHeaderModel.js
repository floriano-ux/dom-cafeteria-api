const { Schema, model } = require("mongoose");

const ContatoHeaderSchema = new Schema(
  {
    titulo: { type: String, required: true },
    subtitulo: { type: String, required: true },
  },
  {
    collection: "Contato_Header",
    timestamps: false,
  }
);

module.exports = model("ContatoHeader", ContatoHeaderSchema);
