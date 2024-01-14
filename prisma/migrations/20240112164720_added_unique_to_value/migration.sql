/*
  Warnings:

  - A unique constraint covering the columns `[value]` on the table `Materials` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Materials_value_key" ON "Materials"("value");
