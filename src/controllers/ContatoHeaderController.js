const ContatoHeader = require("../models/ContatoHeaderModel");

async function get(req, res, next) {
  try {
    const header = await ContatoHeader.findOne();
    res.json(header);
  } catch (err) { next(err); }
}

async function update(req, res, next) {
  try {
    const { titulo, subtitulo } = req.body;
    let registro = await ContatoHeader.findOne();
    if (!registro) {
      registro = await ContatoHeader.create({ titulo, subtitulo });
    } else {
      await registro.update({ titulo, subtitulo });
    }
    res.json(registro);
  } catch (err) { next(err); }
}

module.exports = { get, update };