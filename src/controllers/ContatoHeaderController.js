const ContatoHeader = require("../models/ContatoHeaderModel");

async function get(req, res, next) {
  try {
    const header = await ContatoHeader.findOne();
    res.json(header);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const { titulo, subtitulo } = req.body;
    const registro = await ContatoHeader.findOneAndUpdate(
      {},
      { titulo, subtitulo },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.json(registro);
  } catch (err) {
    next(err);
  }
}

module.exports = { get, update };
