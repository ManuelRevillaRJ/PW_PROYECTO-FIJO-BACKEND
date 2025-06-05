import { z } from "zod";
import { juegos } from "../data/juegos";

// Categorias y Plataformas extraidos de lista de juegos
const listaPlataformas = [
  ...new Set(juegos.flatMap((j) => j.plataformas.map((p) => p.toLowerCase()))),
] as [string, ...string[]]
const listaCategorias = [
  ...new Set(juegos.flatMap((j) => j.categorias.map((c) => c.toLowerCase()))),
] as [string, ...string[]]

export const gamesQuerySchema = z.object({
  platform: z.enum(listaPlataformas).optional(),
  category: z.enum(listaCategorias).optional(),
  offer: z.coerce.boolean().optional(),
})

export const gameQuerySchema = z.object({
  id: z.string().min(1),
})