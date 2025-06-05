import { Router } from "express"
import { juegos } from "../data/juegos"
import { Game } from "../types/types"
import validate from "../middleware/validationMiddleware"
import { gameQuerySchema, gamesQuerySchema } from "../schemas/gameSchemas"

const gamesRouter = Router()

// Endpoints juegos --------------------------

gamesRouter.get("/", validate({ schema: gamesQuerySchema, source: "query" }), (req, res) => {
  const { platform, category, offer } = req.query

  let juegosFiltrados: Game[] = juegos

  if (platform) {
    juegosFiltrados = juegosFiltrados.filter((j) =>
      j.plataformas.map((p) => p.toLowerCase()).includes(platform as string)
    )
  }

  if (category) {
    juegosFiltrados = juegosFiltrados.filter((j) =>
      j.categorias.map((c) => c.toLowerCase()).includes(category as string)
    )
  }

  if (offer) {
    juegosFiltrados = juegosFiltrados.filter((j) => j.oferta === (offer === "true"))
  }

  res.json(juegosFiltrados)
})

gamesRouter.get("/:id", validate({ schema: gameQuerySchema, source: "params" }), (req, res) => {
  const id = req.params.id
  const juego = juegos.find((j) => j.id === id)
  if (!juego) res.status(404).json({ message: "Juego no encontrado" })
  res.json(juego)
})

export default gamesRouter
