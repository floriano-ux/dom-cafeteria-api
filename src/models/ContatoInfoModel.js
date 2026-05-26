const { Schema, model } = require("mongoose");

const ContatoInfoSchema = new Schema(
  {
    whatsapp: { type: String, required: true },
    whatsapp_link: { type: String },
    instagram: { type: String, required: true },
    localizacao: { type: String, required: true },
  },
  {
    collection: "Contato_Info",
    timestamps: false,
  }
);

module.exports = model("ContatoInfo", ContatoInfoSchema);
