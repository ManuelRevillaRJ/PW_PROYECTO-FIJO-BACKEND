import { User } from "../types/types";

export const usuarios: User[] = [
  {
    id: "1",
    correo: "test.test@gmail.com",
    password: "1234",
    nombre: "Tester",
    estado: true,
    permiso: "user",
  },
  {
    id: "u1",
    correo: "ana@example.com",
    password: "hashed_password_ana",
    nombre: "Ana Torres",
    estado: true,
    permiso: "user",
  },
  {
    id: "u2",
    correo: "luis@example.com",
    password: "hashed_password_luis",
    nombre: "Luis García",
    estado: false,
    permiso: "user",
  },
  {
    id: "u3",
    correo: "admin@example.com",
    password: "123",
    nombre: "Admin Root",
    estado: true,
    permiso: "admin",
  },
  {
    id: "u4",
    correo: "maria@example.com",
    password: "hashed_password_maria",
    nombre: "Maria López",
    estado: true,
    permiso: "user",
  },
  {
    id: "u5",
    correo: "carlos@example.com",
    password: "hashed_password_carlos",
    nombre: "Carlos Pérez",
    estado: false,
    permiso: "user",
  },
]