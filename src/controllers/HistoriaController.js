const Historia = require("../models/HistoriaModel");

async function get(req, res, next) {
  try {
    const historia = await Historia.findOne();
    res.json(historia);
  } catch (err) { next(err); }
}

async function update(req, res, next) {
  try {
    const { texto } = req.body;
    let registro = await Historia.findOne();
    if (!registro) {
      registro = await Historia.create({ texto });
    } else {
      await registro.update({ texto });
    }
    res.json(registro);
  } catch (err) { next(err); }
}

module.exports = { get, update };