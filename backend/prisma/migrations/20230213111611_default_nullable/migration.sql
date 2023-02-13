/*
  Warnings:

  - The `isDelivered` column on the `orders` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "isDelivered",
ADD COLUMN     "isDelivered" INTEGER NOT NULL DEFAULT 0;
