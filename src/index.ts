import express from "express";
import { juegos } from "./data/juegos";
import dotenv from "dotenv";
import SMTP2GOApi from "smtp2go-nodejs";
import { User } from "./types/types";
import cors from "cors";

// Para correr la app:
// $ npm run build:run

// .env config
dotenv.config();
const PORT = process.env.PORT;
const API_KEY = process.env.SMTP_API_KEY as string;
const SENDER = process.env.SENDER as string;

const app = express();
app.use(express.json());
app.use(
  // npm install cors
  cors({
    origin: "http://localhost:5173",
  })
);

// api config
// const mailService = api.mail()
//     .to({ email: 'to@address.dev',name:"Optional Name" })
//     .cc({ email: 'cc@address.dev' })
//     .from({ email: 'from@address.dev' })
//     .subject('Testing')
//     .html(`<h1>Hello World</h1>
//     <img src="cid:a-cat"/>
//     <p>This is a test html email!</p>`)
//     .attach(require('path').resolve(__dirname, './files/test.txt'))
//     .inline('a-cat', require('path').resolve(__dirname, './files/cat.jpg'));

const api = SMTP2GOApi(API_KEY);

// function mandarMail(user: User) {
//   const mailService = api
//     .mail()
//     .to({ email: user.correo, name: user?.nombre ?? "Usuario" })
//     .from({ email: SENDER })
//     .subject("Creacion de Cuenta").html(`<h1>Hello World</h1>
//   <p>This is a test html email!</p>`);
//   api.client().consume(mailService);
// }

// Endpoints juegos
app.get("/games", function (_, res) {
  res.json(juegos);
});

app.get("/games/:id", function (req, res) {
  const id_juego = req.params.id;
  try {
    const juego = juegos.find((game) => game.id === id_juego);
    if (juego == undefined) {
      throw new Error("Juego no encontrado o ID invalido");
    }
    res.send(juego);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// Endpoints sesion de usuario
app.post("/signup", function (req, res) {
  const user: User = req.body;
  console.log(user);
  try {
    const mailService = api
      .mail()
      .to({ email: user.correo, name: user?.nombre ?? "Usuario" })
      .from({ email: SENDER })
      .subject("Creacion de Cuenta").html(`<h1>Hello World</h1>
  <p>This is a test html email!</p>`);
    api.client().consume(mailService);
    res.json({ message: "Usuario creado exitosamente!" });
  } catch (error) {
    res.json({
      message: "Error mandando correo",
      status: res.statusCode,
    });
  }
  res.send(user);
});

app.listen(PORT, function () {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
