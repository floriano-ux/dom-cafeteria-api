const Espaco = require("../models/EspacoModel");

async function getAll(req, res, next) {
  try {
    const espacos = await Espaco.find();
    res.json(espacos);
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const espaco = await Espaco.findById(req.params.id);
    if (!espaco) return res.status(404).json({ erro: "Espaço não encontrado." });
    res.json(espaco);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const { foto_url, titulo, descricao } = req.body;
    const espaco = await Espaco.create({ foto_url, titulo, descricao });
    res.status(201).json(espaco);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const espaco = await Espaco.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!espaco) return res.status(404).json({ erro: "Espaço não encontrado." });
    res.json(espaco);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const espaco = await Espaco.findByIdAndDelete(req.params.id);
    if (!espaco) return res.status(404).json({ erro: "Espaço não encontrado." });
    res.json({ mensagem: "Espaço removido com sucesso." });
  } catch (err) {
    next(err);
  }
}

module.exports = { getAll, getById, create, update, remove };
