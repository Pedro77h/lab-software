-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "costumerName" TEXT NOT NULL,
    "isDelivered" BOOLEAN NOT NULL,
    "orderedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pratos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "price" BOOLEAN NOT NULL,
    "ordersId" TEXT,

    CONSTRAINT "pratos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bebidas" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "price" BOOLEAN NOT NULL,
    "ordersId" TEXT,

    CONSTRAINT "bebidas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ordersTopratos" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_bebidasToorders" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ordersTopratos_AB_unique" ON "_ordersTopratos"("A", "B");

-- CreateIndex
CREATE INDEX "_ordersTopratos_B_index" ON "_ordersTopratos"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_bebidasToorders_AB_unique" ON "_bebidasToorders"("A", "B");

-- CreateIndex
CREATE INDEX "_bebidasToorders_B_index" ON "_bebidasToorders"("B");

-- AddForeignKey
ALTER TABLE "_ordersTopratos" ADD CONSTRAINT "_ordersTopratos_A_fkey" FOREIGN KEY ("A") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ordersTopratos" ADD CONSTRAINT "_ordersTopratos_B_fkey" FOREIGN KEY ("B") REFERENCES "pratos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_bebidasToorders" ADD CONSTRAINT "_bebidasToorders_A_fkey" FOREIGN KEY ("A") REFERENCES "bebidas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_bebidasToorders" ADD CONSTRAINT "_bebidasToorders_B_fkey" FOREIGN KEY ("B") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
