import { Router } from "express"
import { safeUser } from "../types/types"
import validate from "../middleware/validationMiddleware"
import { userQuerySchema, usersQuerySchema, userUpdateSchema } from "../schemas/userSchemas"
import { StatusCodes } from "http-status-codes"
import prisma from "../db/prismaClient"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config"

const usersRouter = Router()
// usersRouter.use(tokenValidation())

// Endpoints usuarios --------------------------

usersRouter.get("/", validate({ schema: usersQuerySchema, source: "query" }), async (req, res) => {
  const { state, role } = req.query
  console.log("Query params:", { state, role })
  console.log("Prisma where clause:", {
    ...(state && { estado: state === "true" }),
    ...(role && { permiso: role === "user" ? "user" : "admin" }),
  })

  try {
    const usuarios = await prisma.usuario.findMany({
      where: {
        ...(state && { estado: state === "true" }),
        ...(role && { permiso: role === "user" ? "user" : "admin" }),
      },
    })

    const safeUsuarios = usuarios.map((u) => safeUser.parse(u))
    res.json(safeUsuarios)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: "Internal server error while fetching users.",
      details: error instanceof Error ? error.message : String(error),
    })
  }

  // let usuariosFiltrados: User[] = usuarios

  // if (usuariosFiltrados.length === 0) {
  //   res.status(StatusCodes.NOT_FOUND).json({ error: "Ningun usuario en DB" })
  //   return
  // }

  // if (state) {
  //   usuariosFiltrados = usuariosFiltrados.filter((u) => u.estado === (state === "true"))
  // }

  // if (role) {
  //   usuariosFiltrados = usuariosFiltrados.filter((u) => u.permiso === role)
  // }

  // safeUser es un subconjunto de User sin password y estado
  // const safeUsuarios = usuariosFiltrados.map((u) => safeUser.parse(u))
})

usersRouter.get(
  "/:id",
  validate({ schema: userQuerySchema, source: "params" }),
  async (req, res) => {
    const idParam = req.params.id

    const usuario = await prisma.usuario.findUnique({ where: { id: parseInt(idParam) } })

    if (!usuario) {
      res.status(StatusCodes.NOT_FOUND).json({ error: "Usuario no encontrado" })
      return
    }

    const safeUsuario = safeUser.parse(usuario)
    res.json(safeUsuario)
  }
)

usersRouter.post(
  "/update",
  validate({ schema: userUpdateSchema, source: "body" }),
  async (req, res) => {
    const { userId, firstName, lastName, email } = req.body

    try {
      const existing = await prisma.usuario.findUnique({ where: { id: userId } })
      if (!existing) {
        res.status(StatusCodes.NOT_FOUND).json({ error: "Usuario no encontrado" })
        return
      }
      const updatedUser = await prisma.usuario.update({
        where: { id: userId },
        data: { nombre: `${firstName} ${lastName}`, correo: email },
      })
      const usuario = safeUser.parse(updatedUser)
      const token = jwt.sign(usuario, JWT_SECRET)
      res.json({ token, message: "Usuario actualizado exitosamente" })
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Error al actualizar" })
      return
    }
  }
)

export default usersRouter
