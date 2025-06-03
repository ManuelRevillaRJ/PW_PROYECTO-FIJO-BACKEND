import { Router } from "express"
import { usuarios } from "../data/usuarios"
import { User } from "../types/types"

const usersRouter = Router()

// Endpoints usuarios --------------------------

usersRouter.get("/", function (req, res) {
  const { state, role } = req.query

  let usuariosFiltrados: User[] = usuarios

  if (state) {
    usuariosFiltrados = usuariosFiltrados.filter(
      (u) => u.estado === (state === "true" ? true : false)
    )
  }

  if (role) {
    usuariosFiltrados = usuariosFiltrados.filter((u) => u.permiso === role)
  }

  res.json(usuariosFiltrados)
})

usersRouter.get("/:id", function (req, res) {
  const id = req.params.id
  const usuario = usuarios.find((u) => u.id === id)
  if (!usuario) res.status(404).send("Usuario no encontrado")
  res.json(usuario)
})

export default usersRouter
