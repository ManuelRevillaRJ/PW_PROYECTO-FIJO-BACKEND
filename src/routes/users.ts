import { Router } from "express"
import { usuarios } from "../data/usuarios"
import { safeUser, User } from "../types/types"
import validate from "../middleware/validationMiddleware"
import { userQuerySchema, usersQuerySchema, userUpdateSchema } from "../schemas/userSchemas"
import { StatusCodes } from "http-status-codes"
import { z } from "zod"

const usersRouter = Router()

// Endpoints usuarios --------------------------

usersRouter.get("/", validate({ schema: usersQuerySchema, source: "query" }), (req, res) => {
  const { state, role } = req.query

  let usuariosFiltrados: User[] = usuarios

  if (usuariosFiltrados.length === 0) {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Ningun usuario en DB" })
    return
  }

  if (state) {
    usuariosFiltrados = usuariosFiltrados.filter((u) => u.estado === (state === "true"))
  }

  if (role) {
    usuariosFiltrados = usuariosFiltrados.filter((u) => u.permiso === role)
  }

  // safeUser es un subconjunto de User sin password, token, estado y permiso
  const safeUsuarios = usuariosFiltrados.map((u) => safeUser.parse(u))

  res.json(safeUsuarios)
})

usersRouter.get("/:id", validate({ schema: userQuerySchema, source: "params" }), (req, res) => {
  const id = req.params.id as z.infer<typeof userQuerySchema>
  const usuario = usuarios.find((u) => u.id === id)
  if (!usuario) {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Usuario no encontrado" })
    return
  }

  const safeUsuario = safeUser.parse(usuario)
  res.json(safeUsuario)
})

usersRouter.post("/update", validate({ schema: userUpdateSchema, source: "body" }), (req, res) => {
  const { firstName, lastName, email } = req.body

  // TODO: Pasar el UserID para validar que el usuario exista
  // if (usuarios.find((u) => u.correo === email)) {
  //   res.status(409).json({ message: "El correo ya está en uso" })
  // }

  const userFound = usuarios.find((u) => u.correo === email)

  if (!userFound) {
    res.status(StatusCodes.NOT_FOUND).json({ error: "No existe usuario con este correo" })
    return
  }

  const updatedUser = { ...userFound, nombre: `${firstName} ${lastName}` }
  const safeUsuario = safeUser.parse(updatedUser)
  res.json(safeUsuario)
})

export default usersRouter
