import { Router } from "express"
import { StatusCodes } from "http-status-codes"
import { api, SENDER } from "../config"
import prisma from "../db/prismaClient"
import { randomUUID } from "crypto"

const cartRouter = Router()

cartRouter.post("/checkout", async (req, res) => {
  const { userId, gameIdList } = req.body as { userId: number; gameIdList: number[] }

  const usuario = await prisma.usuario.findUnique({ where: { id: userId } })

  if (!usuario) {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Usuario no encontrado" })
    return
  }

  let codigoList = []

  const ventasCarrito = await Promise.all(
    gameIdList.map(async (gameId) => {
      const juego = await prisma.juego.findUnique({ where: { id: gameId } })
      if (!juego) return null

      const codigo = randomUUID().split("-")[0]
      codigoList.push({ titulo: juego.titulo, codigo })

      return prisma.venta.create({
        data: {
          codigo,
          monto_pagado: juego.precio,
          usuario: { connect: { id: userId } },
          juego: { connect: { id: juego.id } },
        },
      })
    })
  )

  const ventasFiltradas = ventasCarrito.filter(Boolean) // sin nulls

  const htmlJuegos = codigoList
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
    api.client().consume(mailService)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error mandando correo" })
  }

  res.status(StatusCodes.CREATED).json({
    message: "Compra realizada con éxito",
    ventas: ventasFiltradas,
  })
})

export default cartRouter
