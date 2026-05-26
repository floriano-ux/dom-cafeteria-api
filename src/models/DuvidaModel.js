const { Schema, model } = require("mongoose");

const DuvidaSchema = new Schema(
  {
    pergunta: { type: String },
    resposta: { type: String },
  },
  {
    collection: "Duvidas_Frequentes",
    timestamps: false,
  }
);

module.exports = model("Duvida", DuvidaSchema);
