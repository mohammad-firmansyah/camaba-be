/*
  Warnings:

  - You are about to drop the column `organizer` on the `HistoryTryout` table. All the data in the column will be lost.
  - You are about to drop the column `platform` on the `HistoryTryout` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `HistoryTryout` table. All the data in the column will be lost.
  - Added the required column `organizer` to the `Tryout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `platform` to the `Tryout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Tryout` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HistoryTryout" DROP COLUMN "organizer",
DROP COLUMN "platform",
DROP COLUMN "status";

-- AlterTable
ALTER TABLE "Tryout" ADD COLUMN     "organizer" TEXT NOT NULL,
ADD COLUMN     "platform" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL;
