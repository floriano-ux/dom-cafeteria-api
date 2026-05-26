require("dotenv").config();
const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

if (!MONGO_URI) {
  throw new Error("MONGO_URI is required.");
}

mongoose.set("strictQuery", false);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB conectado."))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

module.exports = mongoose;
