/*
  Warnings:

  - You are about to drop the column `rolId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_rolId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "rolId",
ADD COLUMN     "roleId" INTEGER;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Rol"("id") ON DELETE SET NULL ON UPDATE CASCADE;
