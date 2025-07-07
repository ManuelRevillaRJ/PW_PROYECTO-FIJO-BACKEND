import express from 'express';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();
const prisma = new PrismaClient();

const JWT_SECRET = "clave_secreta_simulada"; 

router.post('/register', async (req, res) => {
  const { correo, password, nombre } = req.body;

  const existente = await prisma.usuario.findUnique({ where: { correo } });
  if (existente) return res.status(400).json({ error: 'Correo ya registrado' });

  const hashed = await bcrypt.hash(password, 10);
  const token = jwt.sign({ correo }, JWT_SECRET, { expiresIn: '1h' });

  await prisma.usuario.create({
    data: { correo, password: hashed, nombre, token, estado: false },
  });

  const link = `http://localhost:3000/auth/verify?token=${token}`;
  console.log("🔗 Enlace de verificación (simulado):", link);

  res.json({ mensaje: "Usuario registrado. Revisa consola para verificar cuenta." });
});

router.get('/verify', async (req, res) => {
  const { token } = req.query;

  try {
    const data = jwt.verify(token as string, JWT_SECRET) as { correo: string };

    const usuario = await prisma.usuario.findUnique({ where: { correo: data.correo } });
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    await prisma.usuario.update({
      where: { correo: data.correo },
      data: { estado: true },
    });

    res.json({ mensaje: "Cuenta verificada con éxito" });
  } catch {
    res.status(400).json({ error: "Token inválido o expirado" });
  }
});

export default router;
