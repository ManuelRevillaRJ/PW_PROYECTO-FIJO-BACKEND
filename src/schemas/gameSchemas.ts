import { z } from "zod"

export const gamesQuerySchema = z.object({
  category: z.union([z.string(), z.array(z.string())]).optional(),
  platform: z.union([z.string(), z.array(z.string())]).optional(),
  offer: z.coerce.boolean().optional(),
  strict: z.coerce.boolean().optional(),
})

export const gameQuerySchema = z.object({
  id: z.string().min(1),
})
