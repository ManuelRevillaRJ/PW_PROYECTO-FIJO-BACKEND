import { juegos } from "../data/juegos"
import { usuarios } from "../data/usuarios"
import prisma from "./prismaClient"

async function main() {
  await prisma.usuario.deleteMany()
  for (const user of usuarios) {
    await prisma.usuario.create({
      data: {
        nombre: user.nombre,
        correo: user.correo,
        password: user.password,
        estado: user.estado,
        permiso: user.permiso,
        token: user.token,
      },
    })
  }
  console.log("Initial users created.")

  // await prisma.juego.deleteMany()
  // for (const game of juegos) {
  //   await prisma.juego.create({
  //     data: {
  //       titulo: game.titulo,
  //       descripcion: game.description,
  //       precio: game.precio,
  //       oferta: game.oferta,
  //       rating: game.rating,
  //       estado: game.estado,
  //       cover: game.cover,
  //       categoria: {},
  //       videoURL: game.videoUrl,
  //       imagenes: game.imagenes,
  //       plataformas: {},
  //       calificaciones: {},
  //       ventas: {},
  //     },
  //   })
  // }
  // console.log("Initial games created.")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
