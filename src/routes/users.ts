import { Router } from "express"
import { usuarios } from "../data/usuarios"
import { User } from "../types/types"
import validate from "../middleware/validationMiddleware"
import { userQuerySchema, usersQuerySchema } from "../schemas/userSchemas"

const usersRouter = Router()

// Endpoints usuarios --------------------------

usersRouter.get("/", validate({ schema: usersQuerySchema, source: "query" }), (req, res) => {
  const { state, role } = req.query

  let usuariosFiltrados: User[] = usuarios

  if (state) {
    usuariosFiltrados = usuariosFiltrados.filter((u) => u.estado === (state === "true"))
  }

  if (role) {
    usuariosFiltrados = usuariosFiltrados.filter((u) => u.permiso === role)
  }

  res.json(usuariosFiltrados)
})

usersRouter.get("/:id", validate({ schema: userQuerySchema, source: "params" }), (req, res) => {
  const id = req.params.id
  const usuario = usuarios.find((u) => u.id === id)
  if (!usuario) res.status(404).json({ message: "Usuario no encontrado" })
  res.json(usuario)
})

export default usersRouter
