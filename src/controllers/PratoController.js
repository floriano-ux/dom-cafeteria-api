const Prato = require("../models/PratoModel");

async function getAll(req, res, next) {
  try {
    const pratos = await Prato.findAll();
    res.json(pratos);
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const prato = await Prato.findByPk(req.params.id);
    if (!prato) return res.status(404).json({ erro: "Prato não encontrado." });
    res.json(prato);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const { nome, foto_url } = req.body;
    const prato = await Prato.create({ nome, foto_url });
    res.status(201).json(prato);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const prato = await Prato.findByPk(req.params.id);
    if (!prato) return res.status(404).json({ erro: "Prato não encontrado." });
    const { nome, foto_url } = req.body;
    await prato.update({ nome, foto_url });
    res.json(prato);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const prato = await Prato.findByPk(req.params.id);
    if (!prato) return res.status(404).json({ erro: "Prato não encontrado." });
    await prato.destroy();
    res.json({ mensagem: "Prato removido com sucesso." });
  } catch (err) {
    next(err);
  }
}

module.exports = { getAll, getById, create, update, remove };