import { z } from "zod"

export const usersQuerySchema = z.object({
  state: z.coerce.boolean().optional(),
  role: z.enum(["user", "admin"]).optional(),
})

export const userQuerySchema = z.object({
  id: z.string().min(1),
})

export const userUpdateSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email().optional(),
})
