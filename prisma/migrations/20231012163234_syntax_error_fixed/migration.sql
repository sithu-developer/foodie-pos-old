/*
  Warnings:

  - You are about to drop the column `isAvailable` on the `MenuCategory` table. All the data in the column will be lost.
  - Added the required column `isAvaliable` to the `MenuCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MenuCategory" DROP COLUMN "isAvailable",
ADD COLUMN     "isAvaliable" BOOLEAN NOT NULL;
