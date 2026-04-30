const Foto = require("../models/FotoModel");

async function getAll(req, res, next) {
  try {
    const fotos = await Foto.findAll();
    res.json(fotos);
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const foto = await Foto.findByPk(req.params.id);
    if (!foto) return res.status(404).json({ erro: "Foto não encontrada." });
    res.json(foto);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const { nome, foto_url } = req.body;
    const foto = await Foto.create({ nome, foto_url });
    res.status(201).json(foto);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const foto = await Foto.findByPk(req.params.id);
    if (!foto) return res.status(404).json({ erro: "Foto não encontrada." });
    const { nome, foto_url } = req.body;
    await foto.update({ nome, foto_url });
    res.json(foto);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const foto = await Foto.findByPk(req.params.id);
    if (!foto) return res.status(404).json({ erro: "Foto não encontrada." });
    await foto.destroy();
    res.json({ mensagem: "Foto removida com sucesso." });
  } catch (err) {
    next(err);
  }
}

module.exports = { getAll, getById, create, update, remove };