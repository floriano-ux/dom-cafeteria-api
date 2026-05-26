const { Schema, model } = require("mongoose");

const HistoriaSchema = new Schema(
  {
    texto: { type: String, required: true },
  },
  {
    collection: "Historia",
    timestamps: false,
  }
);

module.exports = model("Historia", HistoriaSchema);
