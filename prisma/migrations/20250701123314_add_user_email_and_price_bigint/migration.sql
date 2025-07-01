/*
  Warnings:

  - Added the required column `userEmail` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "userEmail" TEXT NOT NULL,
ALTER COLUMN "price" SET DATA TYPE BIGINT;
