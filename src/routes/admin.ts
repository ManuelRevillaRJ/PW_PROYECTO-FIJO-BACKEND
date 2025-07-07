import express from 'express';
import { PrismaClient } from '@prisma/client';
import { verificarToken } from '../middleware/authMiddleware';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/catalogo', verificarToken, async (req, res) => {
  const usuario = await prisma.usuario.findUnique({
    where: { correo: (req as any).usuario.correo }
  });

  if (usuario?.permiso !== 'admin') {
    return res.status(403).json({ error: "Solo administradores pueden ver el catálogo" });
  }

  const juegos = await prisma.juego.findMany();
  res.json(juegos);
});

export default router;
