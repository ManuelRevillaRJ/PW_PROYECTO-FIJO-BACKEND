-- CreateTable
CREATE TABLE "Carrito" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Carrito_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_JuegosEnCarrito" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_JuegosEnCarrito_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Carrito_usuarioId_key" ON "Carrito"("usuarioId");

-- CreateIndex
CREATE INDEX "_JuegosEnCarrito_B_index" ON "_JuegosEnCarrito"("B");

-- AddForeignKey
ALTER TABLE "Carrito" ADD CONSTRAINT "Carrito_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JuegosEnCarrito" ADD CONSTRAINT "_JuegosEnCarrito_A_fkey" FOREIGN KEY ("A") REFERENCES "Carrito"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JuegosEnCarrito" ADD CONSTRAINT "_JuegosEnCarrito_B_fkey" FOREIGN KEY ("B") REFERENCES "Juego"("id") ON DELETE CASCADE ON UPDATE CASCADE;
