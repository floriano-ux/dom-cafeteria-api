const ContatoInfo = require("../models/ContatoInfoModel");

async function get(req, res, next) {
  try {
    const contato = await ContatoInfo.findOne();
    res.json(contato);
  } catch (err) { next(err); }
}

async function update(req, res, next) {
  try {
    const { whatsapp, whatsapp_link, instagram, localizacao } = req.body;
    let registro = await ContatoInfo.findOne();
    if (!registro) {
      registro = await ContatoInfo.create({ whatsapp, whatsapp_link, instagram, localizacao });
    } else {
      await registro.update({ whatsapp, whatsapp_link, instagram, localizacao });
    }
    res.json(registro);
  } catch (err) { next(err); }
}

module.exports = { get, update };