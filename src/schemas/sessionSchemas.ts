import { z } from "zod";

export const signupSchema = z.object({
  nombre: z.string().min(3),
  correo: z.string().email(),
  password: z.string().min(8)
})

export const loginSchema = z.object({
  correo: z.string().email(),
  password: z.string().min(8)
})
