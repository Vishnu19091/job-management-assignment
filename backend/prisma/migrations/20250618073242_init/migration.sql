/*
  Warnings:

  - You are about to drop the column `exprerience` on the `Job` table. All the data in the column will be lost.
  - Added the required column `experience` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "exprerience",
ADD COLUMN     "experience" TEXT NOT NULL;
