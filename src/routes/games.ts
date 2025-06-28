import { Router } from "express"
import { juegos } from "../data/juegos"
import { Game } from "../types/types"
import validate from "../middleware/validationMiddleware"
import { gameQuerySchema, gamesQuerySchema } from "../schemas/gameSchemas"
import z from "zod"
import { StatusCodes } from "http-status-codes"
import tokenValidation from "../middleware/tokenValidation"

const gamesRouter = Router()
gamesRouter.use(tokenValidation())

// Endpoints juegos --------------------------

gamesRouter.get("/", validate({ schema: gamesQuerySchema, source: "query" }), (req, res) => {
  const { category, platform, offer, strict } = req.query as z.infer<typeof gamesQuerySchema>

  let juegosFiltrados: Game[] = juegos

  if (category) {
    const categories = Array.isArray(category) ? category : [category]
    juegosFiltrados = juegosFiltrados.filter((j) => {
      const categoriasJuego = j.categorias.map((c) => c.toLowerCase())
      return strict
        ? categories.every((c) => categoriasJuego.includes(c.toLowerCase()))
        : categories.some((c) => categoriasJuego.includes(c.toLowerCase()))
    })
  }

  if (platform) {
    const platforms = Array.isArray(platform) ? platform : [platform]
    juegosFiltrados = juegosFiltrados.filter((j) => {
      const plataformasJuego = j.plataformas.map((p) => p.toLowerCase())
      return platforms.some((p) => plataformasJuego.includes(p.toLowerCase()))
    })
  }

  if (offer) {
    juegosFiltrados = juegosFiltrados.filter((j) => j.oferta === offer)
  }

  res.json(juegosFiltrados)
})

gamesRouter.get("/:id", validate({ schema: gameQuerySchema, source: "params" }), (req, res) => {
  const id = req.params.id
  const juego = juegos.find((j) => j.id === id)
  if (!juego) {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Juego no encontrado" })
    return
  }
  res.json(juego)
})

export default gamesRouter
