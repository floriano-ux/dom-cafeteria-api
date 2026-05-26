const Inicio = require("../models/InicioModel");

async function get(req, res, next) {
  try {
    const inicio = await Inicio.findOne();
    res.json(inicio);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const { foto, texto } = req.body;
    const registro = await Inicio.findOneAndUpdate(
      {},
      { foto, texto },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.json(registro);
  } catch (err) {
    next(err);
  }
}

module.exports = { get, update };
