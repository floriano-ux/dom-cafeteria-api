const Usuario = require("../models/UsuarioModel");
const bcrypt = require("bcrypt");

async function getAll(req, res, next) {
  try {
    const usuarios = await Usuario.findAll({ attributes: { exclude: ["senha_hash"] } });
    res.json(usuarios);
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const usuario = await Usuario.findByPk(req.params.id, { attributes: { exclude: ["senha_hash"] } });
    if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado." });
    res.json(usuario);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const { nome, email, senha, telefone } = req.body;
    const senha_hash = await bcrypt.hash(senha, 10);
    const usuario = await Usuario.create({ nome, email, senha_hash, telefone });
    res.status(201).json({ idUsuarios: usuario.idUsuarios, nome, email, telefone });
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado." });
    const { nome, email, senha, telefone } = req.body;
    const dados = { nome, email, telefone };
    if (senha) dados.senha_hash = await bcrypt.hash(senha, 10);
    await usuario.update(dados);
    res.json({ mensagem: "Usuário atualizado com sucesso." });
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado." });
    await usuario.destroy();
    res.json({ mensagem: "Usuário removido com sucesso." });
  } catch (err) {
    next(err);
  }
}

module.exports = { getAll, getById, create, update, remove };