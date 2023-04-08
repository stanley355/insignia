/*
  Warnings:

  - You are about to drop the column `workspaceId` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_workspaceId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "workspaceId";
