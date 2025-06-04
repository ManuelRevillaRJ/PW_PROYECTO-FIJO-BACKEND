import { Router } from "express"
import SMTP2GOApi from "smtp2go-nodejs"
import validate from "../middleware/validationMiddleware"
import { signupSchema } from "../schemas/sessionSchemas"

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

export default sessionsRouter
