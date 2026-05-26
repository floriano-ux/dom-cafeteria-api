const { Schema, model } = require("mongoose");

const HorarioSchema = new Schema(
  {
    dia: { type: String, required: true },
    horario: { type: String, required: true },
  },
  {
    collection: "Horario",
    timestamps: false,
  }
);

module.exports = model("Horario", HorarioSchema);
