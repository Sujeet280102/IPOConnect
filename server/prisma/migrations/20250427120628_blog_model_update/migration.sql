/*
  Warnings:

  - A unique constraint covering the columns `[heading]` on the table `Blog` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Blog_heading_key" ON "Blog"("heading");
