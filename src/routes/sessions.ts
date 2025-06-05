import { Router } from "express"
import SMTP2GOApi from "smtp2go-nodejs"
import validate from "../middleware/validationMiddleware"
import { changePassSchema, loginSchema, signupSchema } from "../schemas/sessionSchemas"
import { usuarios } from "../data/usuarios"
import dotenv from "dotenv"

dotenv.config()

// api config
const API_KEY = process.env.SMTP_API_KEY as string
const SENDER = process.env.SENDER as string
const api = SMTP2GOApi(API_KEY)

const sessionsRouter = Router()

// Endpoints sesiones --------------------------

sessionsRouter.post("/signup", validate({ schema: signupSchema, source: "body" }), (req, res) => {
  const { nombre, correo, password } = req.body // TODO: password hash con lib bcryptjs
  try {
    const mailService = api
      .mail()
      .to({ email: correo, name: nombre })
      .from({ email: SENDER })
      .subject("Creacion de Cuenta").html(`<h1>Bienvenido a GameStore</h1>
  <p>Cuenta creada exitosamente!</p>`)
    api.client().consume(mailService)
  } catch (error) {
    res.status(500).json({ message: "Error mandando correo" })
  }
  res.status(201).json({ message: "Usuario creado exitosamente!" })
})

sessionsRouter.post("/login", validate({ schema: loginSchema, source: "body" }), (req, res) => {
  const { correo, password } = req.body

  // TODO
})

sessionsRouter.post(
  "/change_pass",
  validate({ schema: changePassSchema, source: "body" }),
  (req, res) => {
    const { correo, newPassword } = req.body

    // Verificar si correo existe
    const listaUsuarios = usuarios
    if (listaUsuarios.flatMap((u) => u.correo.toLowerCase()).includes(correo.toLowerCase())) {
      res.status(404).json({ message: "Usuario con este correo no existe" })
    }

    // TODO: Hashear contraseña y almacenar en DB

    // Mandamos correo que lo redirige a la pagina de login
    try {
      const mailService = api
        .mail()
        .to({ email: correo, name: "usuario" })
        .from({ email: SENDER })
        .subject("Restauración de Contraseña").html(`<h1>Cambio de contraseña</h1>
                <p>Contraseña restaurada!</p>
                <p>
                  Puedes iniciar sesión haciendo clic en el siguiente enlace:<br />
                  <a href="http://localhost:5173/iniciar_sesion" target="_blank">Iniciar sesión</a>
                </p>`)
      api.client().consume(mailService)
    } catch (error) {
      res.status(500).json({ message: "Error mandando correo" })
    }
    res.status(201).json({ message: "Contraseña restaurada exitosamente!" })
  }
)

export default sessionsRouter
