const Horario = require("../models/HorarioModel");

async function getAll(req, res, next) {
  try {
    const horarios = await Horario.findAll();
    res.json(horarios);
  } catch (err) { next(err); }
}

async function getById(req, res, next) {
  try {
    const horario = await Horario.findByPk(req.params.id);
    if (!horario) return res.status(404).json({ erro: "Horário não encontrado." });
    res.json(horario);
  } catch (err) { next(err); }
}

async function create(req, res, next) {
  try {
    const { dia, horario } = req.body;
    const novo = await Horario.create({ dia, horario });
    res.status(201).json(novo);
  } catch (err) { next(err); }
}

async function update(req, res, next) {
  try {
    const horario = await Horario.findByPk(req.params.id);
    if (!horario) return res.status(404).json({ erro: "Horário não encontrado." });
    await horario.update(req.body);
    res.json(horario);
  } catch (err) { next(err); }
}

async function remove(req, res, next) {
  try {
    const horario = await Horario.findByPk(req.params.id);
    if (!horario) return res.status(404).json({ erro: "Horário não encontrado." });
    await horario.destroy();
    res.json({ mensagem: "Horário removido com sucesso." });
  } catch (err) { next(err); }
}

module.exports = { getAll, getById, create, update, remove };