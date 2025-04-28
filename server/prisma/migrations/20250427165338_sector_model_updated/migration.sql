/*
  Warnings:

  - You are about to drop the `SpecificSector` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "SpecificSector";

-- CreateTable
CREATE TABLE "Sector" (
    "id" TEXT NOT NULL,
    "sectorName" TEXT NOT NULL,
    "sectorDesc" TEXT NOT NULL,
    "sectorType" TEXT NOT NULL,
    "largeCap" JSONB NOT NULL,
    "midCap" JSONB NOT NULL,
    "smallCap" JSONB NOT NULL,
    "marketInsights" JSONB NOT NULL,
    "opportunities" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sector_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sector_sectorName_key" ON "Sector"("sectorName");
