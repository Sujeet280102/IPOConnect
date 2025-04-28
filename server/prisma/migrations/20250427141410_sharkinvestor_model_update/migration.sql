/*
  Warnings:

  - A unique constraint covering the columns `[sharkName]` on the table `SharkInvestor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "SharkInvestor_sharkName_key" ON "SharkInvestor"("sharkName");
