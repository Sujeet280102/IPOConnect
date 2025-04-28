/*
  Warnings:

  - You are about to drop the `AllSharkInvestor` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `link` to the `SharkInvestor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `portfolio` to the `SharkInvestor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sharkName` to the `SharkInvestor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `SharkInvestor` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `sectorFocus` on the `SharkInvestor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `stageFocus` on the `SharkInvestor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `notableInvestments` on the `SharkInvestor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `achievements` on the `SharkInvestor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "SharkInvestor" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "link" TEXT NOT NULL,
ADD COLUMN     "portfolio" TEXT NOT NULL,
ADD COLUMN     "sharkName" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "sectorFocus",
ADD COLUMN     "sectorFocus" JSONB NOT NULL,
DROP COLUMN "stageFocus",
ADD COLUMN     "stageFocus" JSONB NOT NULL,
DROP COLUMN "notableInvestments",
ADD COLUMN     "notableInvestments" JSONB NOT NULL,
DROP COLUMN "achievements",
ADD COLUMN     "achievements" JSONB NOT NULL;

-- DropTable
DROP TABLE "AllSharkInvestor";
