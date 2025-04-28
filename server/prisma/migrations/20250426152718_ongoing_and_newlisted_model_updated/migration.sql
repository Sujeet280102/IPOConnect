/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `NewListedIpo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `OngoingIpo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `NewListedIpo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `OngoingIpo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NewListedIpo" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "openDate" SET DATA TYPE TEXT,
ALTER COLUMN "closeDate" SET DATA TYPE TEXT,
ALTER COLUMN "listingDate" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "OngoingIpo" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "openDate" SET DATA TYPE TEXT,
ALTER COLUMN "closeDate" SET DATA TYPE TEXT,
ALTER COLUMN "listingDate" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "NewListedIpo_name_key" ON "NewListedIpo"("name");

-- CreateIndex
CREATE UNIQUE INDEX "OngoingIpo_name_key" ON "OngoingIpo"("name");
