/*
  Warnings:

  - Changed the type of `price` on the `bebidas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `price` on the `pratos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "bebidas" DROP COLUMN "price",
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "isDelivered" DROP NOT NULL;

-- AlterTable
ALTER TABLE "pratos" DROP COLUMN "price",
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;
