import { Router, Request, Response } from "express";
import { juegos } from "../data/juegos";
import { Game } from "../types/types";
import validate from "../middleware/validationMiddleware";
import { gameQuerySchema, gamesQuerySchema } from "../schemas/gameSchemas";
import z from "zod";
import { StatusCodes } from "http-status-codes";
import tokenValidation from "../middleware/tokenValidation";
import prisma from "../db/prismaClient";

const gamesRouter = Router();
// gamesRouter.use(tokenValidation())

// Endpoints juegos --------------------------

//IMPLEMENTADO PARA BUSQUEDA POR NOMBRE
gamesRouter.get("/buscar", (req, res) => {
  const { nombre } = req.query;

  if (typeof nombre !== "string" || nombre.trim() === "") {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Parámetro 'nombre' inválido" });
    return;
  }

  const nombreBuscado = nombre.toLowerCase();
  const juegosFiltrados = juegos.filter((juego) =>
    juego.titulo.toLowerCase().includes(nombreBuscado)
  );

  // Ahora devolvemos el objeto Game completo
  res.status(StatusCodes.OK).json(juegosFiltrados);
});

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
    res.json(juegos);
    console.log(juegos);
  } catch (err) {
    console.error("Error al obtener juegos:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

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
    .slice(0, 12);
  res.json(bestSellers);
});

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
    return;
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

gamesRouter.post("/", async (req: Request, res: Response) => {
  try {
    const juego = req.body;

    if (
      !juego.titulo ||
      !juego.descripcion ||
      juego.precio == null ||
      juego.rating == null ||
      !juego.cover
    ) {
      res.status(400).json({ msg: "Faltan campos obligatorios" });
    }

    const lastRecord = await prisma.juego.findFirst({
      orderBy: {
        id: "desc",
      },
    });

    const nextId = lastRecord ? lastRecord.id + 1 : 1;

    const juegoCreado = await prisma.juego.create({
      data: {
        ...juego,
        id: nextId,
      },
    });

    res.status(201).json({ juego: juegoCreado });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al crear el juego" });
  }
});

export default gamesRouter;
