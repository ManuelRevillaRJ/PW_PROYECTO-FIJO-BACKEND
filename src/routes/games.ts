import { Router } from "express";
import { juegos } from "../data/juegos"
import { Game } from "../types/types"
import validate from "../middleware/validationMiddleware"
import { gameQuerySchema, gamesQuerySchema } from "../schemas/gameSchemas"
import z from "zod"
import { StatusCodes } from "http-status-codes"
import tokenValidation from "../middleware/tokenValidation"
import prisma from "../db/prismaClient"

const gamesRouter = Router()
// gamesRouter.use(tokenValidation())

// Endpoints juegos --------------------------

// VENTAS DE JUEGOS POR CADA MES

gamesRouter.get("/ventas/por-mes", async (_, res) => {
  try {
    const ventas = await prisma.venta.findMany({
      select: {
        fecha: true,
        monto_pagado: true,
        juego: {
          select: {
            id: true,
            titulo: true,
          },
        },
      },
    });

    const agrupadas: Record<
      string,
      {
        juegoId: number;
        titulo: string;
        mes: string;
        totalVentas: number;
        cantidadVentas: number;
      }
    > = {};

    for (const venta of ventas) {
      const mes =
        venta.fecha.getFullYear() +
        "-" +
        String(venta.fecha.getMonth() + 1).padStart(2, "0");
      const key = `${venta.juego.id}-${mes}`;

      if (!agrupadas[key]) {
        agrupadas[key] = {
          juegoId: venta.juego.id,
          titulo: venta.juego.titulo,
          mes,
          totalVentas: 0,
          cantidadVentas: 0,
        };
      }

      agrupadas[key].totalVentas += venta.monto_pagado;
      agrupadas[key].cantidadVentas += 1;
    }

    const resultado = Object.values(agrupadas).sort((a, b) => {
      if (a.mes === b.mes) return a.juegoId - b.juegoId;
      return a.mes.localeCompare(b.mes);
    });

    res.json(resultado);
  } catch (error) {
    console.error("Error al obtener ventas por mes:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});
//-------------------


//IMPLEMENTADO PARA BUSQUEDA POR NOMBRE
gamesRouter.get("/buscar", (req, res) => {
  const { nombre } = req.query

  if (typeof nombre !== "string" || nombre.trim() === "") {
    res.status(StatusCodes.BAD_REQUEST).json({ error: "Parámetro 'nombre' inválido" })
    return
  }

  const nombreBuscado = nombre.toLowerCase()
  const juegosFiltrados = juegos.filter((juego) =>
    juego.titulo.toLowerCase().includes(nombreBuscado)
  )

  // Ahora devolvemos el objeto Game completo
  res.status(StatusCodes.OK).json(juegosFiltrados)
})

//---------------------

gamesRouter.get("/", async (_, res) => {
  try {
    // const juegos = await prisma.juego.findMany({
    //   include: {
    //     categoria: true,
    //     plataformas: {
    //       include: {
    //         plataforma: true,
    //       },
    //     },
    //   },
    // })

    // // Formatea las plataformas para que sea un array de strings
    // const juegosFormateados = juegos.map((j) => ({
    //   ...j,
    //   categoria: j.categoria.nombre,
    //   plataformas: j.plataformas.map((jp) => jp.plataforma.nombre),
    // }))

    // res.json(juegosFormateados)
    res.json(juegos)
    console.log(juegos)
  } catch (err) {
    console.error("Error al obtener juegos:", err)
    res.status(500).json({ error: "Error interno del servidor" })
  }
})

gamesRouter.get("/top-rated", async (req, res) => {
  try {
    const top12 = await prisma.juego.findMany({
      orderBy: {
        rating: "desc",
      },
      take: 12,
    });
    res.json(top12);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error obteniendo juegos top rated" });
  }
});

gamesRouter.get("/best-sellers", (req, res) => {
  const bestSellers: Game[] = juegos
    .sort((a, b) => (b.ventas?.length ?? 0) - (a.ventas?.length ?? 0))
    .slice(0, 12)
  res.json(bestSellers)
})

//Retora por ID
gamesRouter.get(
  "/:id",
  validate({ schema: gameQuerySchema, source: "params" }),
  async (req, res) => {
    const idParam = req.params.id;

    // const juego = juegos.find((j) => j.id === id)
    const juego = await prisma.juego.findUnique({
      where: { id: parseInt(idParam) },
    });

    if (!juego) {
      res.status(StatusCodes.NOT_FOUND).json({ error: "Juego no encontrado" });
      return;
    }
    res.json(juego);
  }
);

gamesRouter.delete("/:id", async (req, res) => {
  const idParam = req.params.id;
  try {
    await prisma.juego.delete({ where: { id: parseInt(idParam) } });
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: "Juego no encontrado" });
  }
});

gamesRouter.put("/:id", async (req, res) => {
  const idParam = req.params.id;
  const datosActualizados = req.body;

  try {
    const juegoActualizado = await prisma.juego.update({
      where: { id: parseInt(idParam) },
      data: datosActualizados,
    });
    res.json(juegoActualizado);
  } catch (error) {
    res.status(404).json({ error: "Juego no encontrado" });
  }
});
/*

gamesRouter.post("/", async (req, res) => {
  const idParam = req.params.id;
  const datosActualizados = req.body;

  try {
    const juegoActualizado = await prisma.juego.update({
      where: { id: parseInt(idParam) },
      data: datosActualizados,
    });
    res.json(juegoActualizado);
  } catch (error) {
    res.status(404).json({ error: "Juego no encontrado" });
  }
}); */

export default gamesRouter;
