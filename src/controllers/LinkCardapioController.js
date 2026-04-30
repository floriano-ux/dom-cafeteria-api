const LinkCardapio = require("../models/LinkCardapioModel");

async function get(req, res, next) {
  try {
    const link = await LinkCardapio.findOne();
    res.json(link);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const { link } = req.body;
    let registro = await LinkCardapio.findOne();
    if (!registro) {
      registro = await LinkCardapio.create({ link });
    } else {
      await registro.update({ link });
    }
    res.json(registro);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const registro = await LinkCardapio.findOne();
    if (!registro) return res.status(404).json({ erro: "Link não encontrado." });
    await registro.update({ link: null });
    res.json({ mensagem: "Link removido com sucesso." });
  } catch (err) {
    next(err);
  }
}

module.exports = { get, update, remove };