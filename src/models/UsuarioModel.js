const { Schema, model } = require("mongoose");

const UsuarioSchema = new Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha_hash: { type: String, required: true },
    telefone: { type: String, required: true },
  },
  {
    collection: "Usuarios",
    timestamps: false,
  }
);

module.exports = model("Usuario", UsuarioSchema);
