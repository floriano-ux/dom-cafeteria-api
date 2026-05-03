const Inicio = require("../models/InicioModel");

async function get(req, res, next) {
  try {
    const inicio = await Inicio.findOne();
    res.json(inicio);
  } catch (err) { next(err); }
}

async function update(req, res, next) {
  try {
    const { foto, texto } = req.body;
    let registro = await Inicio.findOne();
    if (!registro) {
      registro = await Inicio.create({ foto, texto });
    } else {
      await registro.update({ foto, texto });
    }
    res.json(registro);
  } catch (err) { next(err); }
}

module.exports = { get, update };