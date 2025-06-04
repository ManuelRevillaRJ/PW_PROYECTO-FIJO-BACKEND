import { Router } from "express"
import { juegos } from "../data/juegos"
import { Game } from "../types/types"
import validate from "../middleware/validationMiddleware"
import { z } from "zod"

const gamesRouter = Router()

// Endpoints juegos --------------------------
// Categorias y Plataformas
const listaPlataformas = [
  ...new Set(juegos.flatMap((j) => j.plataformas.map((p) => p.toLowerCase()))),
] as [string, ...string[]]
const listaCategorias = [
  ...new Set(juegos.flatMap((j) => j.categorias.map((c) => c.toLowerCase()))),
] as [string, ...string[]]

// Normalizar params
// const normalizeEnum = (allowed: string[]) =>
//   z
//     .string()
//     .transform((val) => val.toLowerCase())
//     .refine((val) => allowed.includes(val), {
//       message: "Invalid value",
//     });

const gamesQuerySchema = z.object({
  platform: z.enum(listaPlataformas).optional(),
  category: z.enum(listaCategorias).optional(),
  // offer: z.enum(["true", "false"]).optional(),
  offer: z.coerce.boolean().optional(),
})

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
    juegosFiltrados = juegosFiltrados.filter((j) =>
      offer === "true" ? j.esta_oferta : !j.esta_oferta
    )
  }

  res.json(juegosFiltrados)
})

const gameQuerySchema = z.object({
  id: z.string().min(1),
})

gamesRouter.get("/:id", validate({ schema: gameQuerySchema, source: "params" }), (req, res) => {
  const id = req.params.id
  const juego = juegos.find((j) => j.id === id)
  if (!juego) res.status(404).json({ message: "Juego no encontrado" })
  res.json(juego)
})

export default gamesRouter
