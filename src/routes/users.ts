import { Router } from "express"
import { usuarios } from "../data/usuarios"
import { User } from "../types/types"
import { z } from "zod"
import { validate } from "../middleware/validationMiddleware"

const usersRouter = Router()

// Endpoints usuarios --------------------------

const usersQuerySchema = z
  .object({
    state: z.enum(["true", "false"]).optional(),
    role: z.enum(["user", "admin"]).optional(),
  })
  .transform((data) => ({
    state: data.state?.toLowerCase(),
    role: data.role?.toLowerCase(),
  }))

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

const userQuerySchema = z.object({
  id: z.string().min(1),
})

usersRouter.get("/:id", validate({ schema: userQuerySchema, source: "params" }), (req, res) => {
  const id = req.params.id
  const usuario = usuarios.find((u) => u.id === id)
  if (!usuario) res.status(404).send("Usuario no encontrado")
  res.json(usuario)
})

export default usersRouter
