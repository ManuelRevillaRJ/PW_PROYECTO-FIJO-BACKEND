import { Router } from "express"
import { User } from "../types/types"
import SMTP2GOApi from "smtp2go-nodejs"

// api config
const API_KEY = (process.env.SMTP_API_KEY as string) || "api-41D1574A20004588A7559763B372142D"
const SENDER = (process.env.SENDER as string) || "20214689@aloe.ulima.edu.pe"
const api = SMTP2GOApi(API_KEY)

const sessionsRouter = Router()

// Endpoints sesiones --------------------------

sessionsRouter.post("/signup", function (req, res) {
  const user: User = req.body
  console.log(user)
  try {
    const mailService = api
      .mail()
      .to({ email: user.correo, name: user?.nombre ?? "Usuario" })
      .from({ email: SENDER })
      .subject("Creacion de Cuenta").html(`<h1>Bienvenido a GameStore</h1>
  <p>Cuenta creada exitosamente!</p>`)
    api.client().consume(mailService)
    res.status(201).json({ message: "Usuario creado exitosamente!" })
  } catch (error) {
    res.status(500).json({ message: "Error mandando correo" })
  }
  res.send(user)
})

export default sessionsRouter
