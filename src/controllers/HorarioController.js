const Horario = require("../models/HorarioModel");

async function getAll(req, res, next) {
  try {
    const horarios = await Horario.find();
    res.json(horarios);
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const horario = await Horario.findById(req.params.id);
    if (!horario) return res.status(404).json({ erro: "Horário não encontrado." });
    res.json(horario);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const { dia, horario } = req.body;
    const novo = await Horario.create({ dia, horario });
    res.status(201).json(novo);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const horario = await Horario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!horario) return res.status(404).json({ erro: "Horário não encontrado." });
    res.json(horario);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const horario = await Horario.findByIdAndDelete(req.params.id);
    if (!horario) return res.status(404).json({ erro: "Horário não encontrado." });
    res.json({ mensagem: "Horário removido com sucesso." });
  } catch (err) {
    next(err);
  }
}

module.exports = { getAll, getById, create, update, remove };
