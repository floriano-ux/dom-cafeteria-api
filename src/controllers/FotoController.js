const Foto = require("../models/FotoModel");

async function getAll(req, res, next) {
  try {
    const fotos = await Foto.find();
    res.json(fotos);
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const foto = await Foto.findById(req.params.id);
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
    const { nome, foto_url } = req.body;
    const foto = await Foto.findByIdAndUpdate(
      req.params.id,
      { nome, foto_url },
      { new: true }
    );
    if (!foto) return res.status(404).json({ erro: "Foto não encontrada." });
    res.json(foto);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const foto = await Foto.findByIdAndDelete(req.params.id);
    if (!foto) return res.status(404).json({ erro: "Foto não encontrada." });
    res.json({ mensagem: "Foto removida com sucesso." });
  } catch (err) {
    next(err);
  }
}

module.exports = { getAll, getById, create, update, remove };
