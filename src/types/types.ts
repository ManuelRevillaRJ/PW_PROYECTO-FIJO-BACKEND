import { z } from "zod"

// Usuario
export const UserSchema = z.object({
  id: z.string(),
  correo: z.string().email(),
  password: z.string(),
  nombre: z.string(),
  token: z.string(),
  estado: z.boolean(),
  permiso: z.enum(["user", "admin"]),
})
export type User = z.infer<typeof UserSchema>
export const safeUser = UserSchema.omit({
  password: true,
  token: true,
  estado: true,
  permiso: true,
})

// Venta (muchos a uno con Juego y Usuario)
export const SaleSchema = z.object({
  id: z.string(),
  fecha: z.number(), // Timestamp (milliseconds)
  usuario_id: z.string(),
  juego_id: z.string(),
  codigo: z.string(),
  monto: z.number(),
})
export type Sale = z.infer<typeof SaleSchema>

// Juego (Game) - principal
export const GameSchema = z.object({
  id: z.string(),
  titulo: z.string(),
  description: z.string(),
  precio: z.number(),
  rating: z.number().optional(),
  oferta: z.boolean(),
  estado: z.boolean(),
  cover: z.string().url().optional(),
  imagenes: z.array(z.string().url()).optional(),
  videoUrl: z.string().url().optional(),
  categorias: z.array(z.string()),
  plataformas: z.array(z.string()),
  ventas: z.array(SaleSchema),
})
export type Game = z.infer<typeof GameSchema>

// Noticia (sin relaciones)
export const NewsSchema = z.object({
  id: z.string(),
  titulo: z.string(),
  texto: z.string(),
  activo: z.boolean(),
})
export type News = z.infer<typeof NewsSchema>
