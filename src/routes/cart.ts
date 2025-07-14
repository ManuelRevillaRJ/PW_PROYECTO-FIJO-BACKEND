import { Router } from "express"
import { StatusCodes } from "http-status-codes"
import { api, SENDER } from "../config"
import prisma from "../db/prismaClient"
import { randomUUID } from "crypto"

const cartRouter = Router()

cartRouter.post("/checkout", async (req, res) => {
  const { correo, gameIdList } = req.body as { correo: string; gameIdList: number[] }

  const usuario = await prisma.usuario.findUnique({ where: { correo: correo } })

  if (!usuario) {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Usuario no encontrado" })
    return
  }

  const ventasCarrito = await Promise.all(
    gameIdList.map(async (gameId) => {
      const juego = await prisma.juego.findUnique({ where: { id: gameId } })
      if (!juego) return null

      const codigo = randomUUID().split("-")[0]

      return {
        venta: await prisma.venta.create({
          data: {
            codigo,
            monto_pagado: juego.precio,
            usuario: { connect: { id: usuario.id } },
            juego: { connect: { id: juego.id } },
          },
        }),
        titulo: juego.titulo,
        codigo,
      }
    })
  )

  const ventasFiltradas = ventasCarrito.filter(Boolean) as {
    venta: any
    titulo: string
    codigo: string
  }[]

  const htmlJuegos = ventasFiltradas
    .map((item) => `<li><strong>${item.titulo}</strong>: ${item.codigo}</li>`)
    .join("")

  const htmlContent = `
    <h1>Gracias por comprar en GameStore</h1>
    <p>Juegos adquiridos exitosamente:</p>
    <ul>${htmlJuegos}</ul>
  `

  try {
    const mailService = api
      .mail()
      .to({ email: usuario.correo, name: usuario.nombre })
      .from({ email: SENDER })
      .subject("Compra de Juegos")
      .html(htmlContent)
    await api.client().consume(mailService)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error mandando correo" })
    return
  }

  res.status(StatusCodes.CREATED).json({
    message: "Compra realizada con éxito",
    ventas: ventasFiltradas,
  })
})

export default cartRouter
