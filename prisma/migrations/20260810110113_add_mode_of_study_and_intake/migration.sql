/*
  Warnings:

  - Added the required column `intake` to the `AdmissionApplication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modeOfStudy` to the `AdmissionApplication` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ModeOfStudy" AS ENUM ('FULL_TIME', 'PART_TIME');

-- CreateEnum
CREATE TYPE "Intake" AS ENUM ('JANUARY', 'MAY', 'SEPTEMBER');

-- AlterTable
ALTER TABLE "AdmissionApplication" ADD COLUMN     "intake" "Intake" NOT NULL,
ADD COLUMN     "modeOfStudy" "ModeOfStudy" NOT NULL;
