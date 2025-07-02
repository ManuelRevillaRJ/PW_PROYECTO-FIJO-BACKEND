import prisma from "../src/db/prismaClient"

async function main() {
  const adminExists = await prisma.usuario.findUnique({
    where: { correo: "admin@example.com" },
  })

  if (!adminExists) {
    await prisma.usuario.create({
      data: {
        nombre: "Admin",
        correo: "admin@example.com",
        permiso: "admin",
        password: "admin",
        estado: true,
        token: "",
      },
    })

    console.log("Admin user created.")
  } else {
    console.log("Admin user already exists.")
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
