import express from 'express';
import { PrismaClient } from '@prisma/client';
import { verificarToken } from '../middleware/authMiddleware';

const router = express.Router();
const prisma = new PrismaClient();

router.delete('/item/:juegoId', verificarToken, async (req, res) => {
  const usuario = (req as any).usuario;
  const juegoId = parseInt(req.params.juegoId);

  await prisma.carrito.deleteMany({
    where: { usuario: { correo: usuario.correo }, juego_id: juegoId }
  });

  res.json({ mensaje: "Ítem eliminado del carrito" });
});

router.post('/checkout', verificarToken, async (req, res) => {
  const usuarioData = (req as any).usuario;

  const usuario = await prisma.usuario.findUnique({
    where: { correo: usuarioData.correo },
  });

  const carrito = await prisma.carrito.findMany({
    where: { usuario_id: usuario!.id },
    include: { juego: true },
  });

  if (carrito.length === 0) return res.status(400).json({ error: "Carrito vacío" });

  for (const item of carrito) {
    await prisma.venta.create({
      data: {
        usuario_id: usuario!.id,
        juego_id: item.juego_id,
        codigo: `COD-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
        monto_pagado: item.juego.precio,
      },
    });
  }

  await prisma.carrito.deleteMany({ where: { usuario_id: usuario!.id } });

  res.json({ mensaje: "Compra realizada con éxito" });
});

export default router;
