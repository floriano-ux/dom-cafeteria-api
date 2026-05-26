const Usuario = require("../models/UsuarioModel");
const bcrypt = require("bcrypt");

async function getAll(req, res, next) {
  try {
    const usuarios = await Usuario.find().select("-senha_hash");
    res.json(usuarios);
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const usuario = await Usuario.findById(req.params.id).select("-senha_hash");
    if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado." });
    res.json(usuario);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ erro: "Requisição inválida: corpo JSON ausente." });
    }

    const { nome, email, senha, telefone } = req.body;
    if (!nome || !email || !senha || !telefone) {
      return res.status(400).json({ erro: "Todos os campos nome, email, senha e telefone são obrigatórios." });
    }

    const senha_hash = await bcrypt.hash(senha, 10);
    const usuario = await Usuario.create({ nome, email, senha_hash, telefone });
    res.status(201).json({ idUsuarios: usuario._id, nome, email, telefone });
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ erro: "Requisição inválida: corpo JSON ausente." });
    }

    const { nome, email, senha, telefone } = req.body;
    const dados = { nome, email, telefone };
    if (senha) dados.senha_hash = await bcrypt.hash(senha, 10);

    const usuario = await Usuario.findByIdAndUpdate(req.params.id, dados, { new: true });
    if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado." });
    res.json({ mensagem: "Usuário atualizado com sucesso." });
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado." });
    res.json({ mensagem: "Usuário removido com sucesso." });
  } catch (err) {
    next(err);
  }
}

module.exports = { getAll, getById, create, update, remove };
