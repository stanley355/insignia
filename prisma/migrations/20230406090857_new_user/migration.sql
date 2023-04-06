/*
  Warnings:

  - A unique constraint covering the columns `[workspaceId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `account` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `session` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workspace` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workspaceId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRoleEnum" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "account" TEXT NOT NULL,
ADD COLUMN     "role" "UserRoleEnum" NOT NULL,
ADD COLUMN     "session" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "workspace" TEXT NOT NULL,
ADD COLUMN     "workspaceId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_workspaceId_key" ON "User"("workspaceId");
