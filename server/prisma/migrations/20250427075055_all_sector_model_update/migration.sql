/*
  Warnings:

  - A unique constraint covering the columns `[sectorName]` on the table `AllSector` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AllSector_sectorName_key" ON "AllSector"("sectorName");
