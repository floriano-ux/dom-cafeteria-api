const ContatoInfo = require("../models/ContatoInfoModel");

async function get(req, res, next) {
  try {
    const contato = await ContatoInfo.findOne();
    res.json(contato);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const { whatsapp, whatsapp_link, instagram, localizacao } = req.body;
    const registro = await ContatoInfo.findOneAndUpdate(
      {},
      { whatsapp, whatsapp_link, instagram, localizacao },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.json(registro);
  } catch (err) {
    next(err);
  }
}

module.exports = { get, update };
