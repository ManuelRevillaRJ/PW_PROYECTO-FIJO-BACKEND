import { Router } from "express"
import SMTP2GOApi from "smtp2go-nodejs"
import validate from "../middleware/validationMiddleware"
import { changePassSchema, loginSchema, signupSchema } from "../schemas/sessionSchemas"
import { usuarios } from "../data/usuarios"
import { API_KEY, SENDER } from "../config"
import { StatusCodes } from "http-status-codes"

const api = SMTP2GOApi(API_KEY)

// Referencias
// https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs

const sessionsRouter = Router()

// Endpoints sesiones --------------------------

sessionsRouter.post("/signup", validate({ schema: signupSchema, source: "body" }), (req, res) => {
  const { nombre, correo, password } = req.body

  const foundUser = usuarios.find((u) => u.correo === correo)

  if (foundUser) {
    res.status(StatusCodes.CONFLICT).json({ message: "Ya existe un usuario con este correo" })
    return
  }

  // TODO: password hash con lib bcrypt y generar JWT

  try {
    const mailService = api
      .mail()
      .to({ email: correo, name: nombre })
      .from({ email: SENDER })
      .subject("Creacion de Cuenta").html(`<h1>Bienvenido a GameStore</h1>
  <p>Cuenta creada exitosamente!</p>`)
    api.client().consume(mailService)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error mandando correo" })
  }
  res.status(StatusCodes.CREATED).json({ message: "Usuario creado exitosamente!" })
})

sessionsRouter.post("/login", validate({ schema: loginSchema, source: "body" }), (req, res) => {
  const { correo, password } = req.body

  const foundUser = usuarios.find((u) => u.correo === correo)

  if (!foundUser) {
    res.status(StatusCodes.NOT_FOUND).json({ message: "Usuario no encontrado" })
    return
  }

  // TODO: Pasos:
  // 1. Comparar password enviado con el hasheado en la DB usando bcrypt
  // 2. Si es incorrecto devolver error
  // 3. Generar JWT (token) del usuario y actualizarlo en la DB
  // 4. Devolver informacion del usuario y respuesta exitosa
})

sessionsRouter.post(
  "/change_pass",
  validate({ schema: changePassSchema, source: "body" }),
  (req, res) => {
    const { correo, newPassword } = req.body

    // Verificar si correo existe
    const listaUsuarios = usuarios
    if (listaUsuarios.flatMap((u) => u.correo.toLowerCase()).includes(correo.toLowerCase())) {
      res.status(StatusCodes.NOT_FOUND).json({ message: "Usuario con este correo no existe" })
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
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error mandando correo" })
    }
    res.status(StatusCodes.CREATED).json({ message: "Contraseña restaurada exitosamente!" })
  }
)

export default sessionsRouter
