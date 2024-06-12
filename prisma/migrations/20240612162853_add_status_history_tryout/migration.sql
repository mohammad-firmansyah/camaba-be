/*
  Warnings:

  - Added the required column `status` to the `HistoryTryout` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HistoryTryout" ADD COLUMN     "status" TEXT NOT NULL;
