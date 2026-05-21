require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const errorHandler = require("./middlewares/errorHandler");

const usuarioRoutes = require("./routes/usuarioRoutes");
const duvidaRoutes = require("./routes/duvidaRoutes");
const pratoRoutes = require("./routes/pratoRoutes");
const linkCardapioRoutes = require("./routes/linkCardapioRoutes");
const fotoRoutes = require("./routes/fotoRoutes");
const inicioRoutes = require("./routes/inicioRoutes");
const historiaRoutes = require("./routes/historiaRoutes");
const espacoRoutes = require("./routes/espacoRoutes");
const contatoInfoRoutes = require("./routes/contatoInfoRoutes");
const horarioRoutes = require("./routes/horarioRoutes");
const contatoHeaderRoutes = require("./routes/contatoHeaderRoutes");
const authRoutes = require("./routes/authRouter");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/duvidas", duvidaRoutes);
app.use("/api/pratos", pratoRoutes);
app.use("/api/link-cardapio", linkCardapioRoutes);
app.use("/api/fotos", fotoRoutes);
app.use("/api/inicio", inicioRoutes);
app.use("/api/historia", historiaRoutes);
app.use("/api/espaco", espacoRoutes);
app.use("/api/contato-info", contatoInfoRoutes);
app.use("/api/horario", horarioRoutes);
app.use("/api/contato-header", contatoHeaderRoutes);
app.use("/api/auth", authRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log("Banco de dados conectado.");
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  })
  .catch((err) => console.error("Erro ao conectar ao banco:", err));