require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const errorHandler = require("./middlewares/errorHandler");

const pratoRoutes = require("./routes/pratoRoutes");
const linkCardapioRoutes = require("./routes/linkCardapioRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");
const duvidaRoutes = require("./routes/duvidaRoutes");
const fotoRoutes = require("./routes/fotoRoutes");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.use("/api/pratos", pratoRoutes);
app.use("/api/link-cardapio", linkCardapioRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/duvidas", duvidaRoutes);
app.use("/api/fotos", fotoRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log("Banco de dados conectado.");
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  })
  .catch((err) => console.error("Erro ao conectar ao banco:", err));