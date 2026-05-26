const { Schema, model } = require("mongoose");

const LinkCardapioSchema = new Schema(
  {
    link: { type: String },
  },
  {
    collection: "Link_Cardapio",
    timestamps: false,
  }
);

module.exports = model("LinkCardapio", LinkCardapioSchema);
