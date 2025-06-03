import { Router } from "express"
import { juegos } from "../data/juegos"
import { Game } from "../types/types"

const gamesRouter = Router()

// Endpoints juegos --------------------------

gamesRouter.get("/", function (req, res) {
  const { platform, category, offer } = req.query

  let juegosFiltrados: Game[] = juegos

  if (platform) {
    juegosFiltrados = juegosFiltrados.filter((j) => j.plataformas.includes(platform as string))
  }

  if (category) {
    juegosFiltrados = juegosFiltrados.filter((j) => j.categorias.includes(category as string))
  }

  if (offer) {
    juegosFiltrados = juegosFiltrados.filter((j) => j.esta_oferta)
  }

  res.json(juegosFiltrados)
})

gamesRouter.get("/:id", function (req, res) {
  const id = req.params.id
  const juego = juegos.find((j) => j.id === id)
  if (!juego) res.status(404).send("Juego no encontrado")
  res.json(juego)
})

export default gamesRouter
