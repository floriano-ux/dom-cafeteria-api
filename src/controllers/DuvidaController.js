const Duvida = require("../models/DuvidaModel");

async function getAll(req, res, next) {
  try {
    const duvidas = await Duvida.find();
    res.json(duvidas);
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const duvida = await Duvida.findById(req.params.id);
    if (!duvida) return res.status(404).json({ erro: "Dúvida não encontrada." });
    res.json(duvida);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const { pergunta, resposta } = req.body;
    const duvida = await Duvida.create({ pergunta, resposta });
    res.status(201).json(duvida);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const { pergunta, resposta } = req.body;
    const duvida = await Duvida.findByIdAndUpdate(
      req.params.id,
      { pergunta, resposta },
      { new: true }
    );
    if (!duvida) return res.status(404).json({ erro: "Dúvida não encontrada." });
    res.json(duvida);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const duvida = await Duvida.findByIdAndDelete(req.params.id);
    if (!duvida) return res.status(404).json({ erro: "Dúvida não encontrada." });
    res.json({ mensagem: "Dúvida removida com sucesso." });
  } catch (err) {
    next(err);
  }
}

module.exports = { getAll, getById, create, update, remove };
