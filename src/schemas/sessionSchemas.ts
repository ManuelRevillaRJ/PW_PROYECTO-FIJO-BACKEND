import { z } from "zod";

export const signupSchema = z.object({
  nombre: z.string(),
  correo: z.string().email(),
  password: z.string(),
})

export const loginSchema = z.object({
  correo: z.string().email(),
  password: z.string(),
})

export const logoutSchema = z.object({
  correo: z.string().email(),
})

export const changePassSchema = z.object({
  correo: z.string().email(),
  newPassword: z.string(),
})
