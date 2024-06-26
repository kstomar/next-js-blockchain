/*
  Warnings:

  - A unique constraint covering the columns `[currencyId]` on the table `BlockchainTable` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `currencyId` to the `BlockchainTable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BlockchainTable" ADD COLUMN     "currencyId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "BlockchainTable_currencyId_key" ON "BlockchainTable"("currencyId");
