/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `UpcomingIpo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `UpcomingIpo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UpcomingIpo" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "openDate" SET DATA TYPE TEXT,
ALTER COLUMN "closeDate" SET DATA TYPE TEXT,
ALTER COLUMN "listingDate" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "UpcomingIpo_name_key" ON "UpcomingIpo"("name");
