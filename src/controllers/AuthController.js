const Usuario = require("../models/UsuarioModel");
const bcrypt = require("bcrypt");

async function login(req, res, next) {
  try {
    const { email, senha } = req.body;

    if (!email || !senha)
      return res.status(400).json({ erro: "Email e senha são obrigatórios." });

    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario)
      return res.status(401).json({ erro: "Email ou senha incorretos." });

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha_hash);
    if (!senhaCorreta)
      return res.status(401).json({ erro: "Email ou senha incorretos." });

    res.json({
      idUsuarios: usuario.idUsuarios,
      nome: usuario.nome,
      email: usuario.email,
    });
  } catch (err) {
    next(err);
  }
}

    async function recuperarSenha(req, res, next) {
      try {
        const { email } = req.body;

        if (!email)
          return res.status(400).json({ erro: "Email é obrigatório." });

        const usuario = await Usuario.findOne({ where: { email } });
        if (!usuario)
          return res.status(404).json({ erro: "Email não encontrado." });

        res.json({ mensagem: "Email encontrado." });
      } catch (err) {
        next(err);
      }
    }

module.exports = { login, recuperarSenha };