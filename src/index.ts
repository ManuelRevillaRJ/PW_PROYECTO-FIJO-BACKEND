import express from "express";
import { juegos } from "./data/juegos";
import dotenv from "dotenv";

// Para correr la app:
// $ npm run build:run

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const API_KEY = process.env.SMTP_API_KEY;
const SENDER = process.env.SENDER;

app.get("/games", function (_, res) {
  res.send(juegos);
});

app.get("/games/:id", function (req, res) {
  const id_juego = req.params.id;
  try {
    const juego = juegos.find((game) => game.id === id_juego);
    res.send(juego);
  } catch (error) {
    res.send("Juego no encontrado o ID invalido");
  }
});

app.listen(PORT, function () {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
