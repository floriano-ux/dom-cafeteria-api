const Historia = require("../models/HistoriaModel");

async function get(req, res, next) {
  try {
    const historia = await Historia.findOne();
    res.json(historia);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const { texto } = req.body;
    const registro = await Historia.findOneAndUpdate(
      {},
      { texto },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.json(registro);
  } catch (err) {
    next(err);
  }
}

module.exports = { get, update };
