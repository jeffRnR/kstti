/*
  Warnings:

  - You are about to drop the column `campusId` on the `Department` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Campus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `campusLabel` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `GalleryImage` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "IntakeStatus" AS ENUM ('OPEN', 'CLOSING_SOON', 'CLOSED');

-- CreateEnum
CREATE TYPE "GallerySpan" AS ENUM ('NORMAL', 'TALL', 'WIDE_TALL');

-- DropForeignKey
ALTER TABLE "Department" DROP CONSTRAINT "Department_campusId_fkey";

-- AlterTable
ALTER TABLE "Campus" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "campusId" TEXT,
ADD COLUMN     "campusLabel" TEXT NOT NULL,
ADD COLUMN     "feePerSemester" TEXT,
ADD COLUMN     "intakeStatus" "IntakeStatus" NOT NULL DEFAULT 'OPEN';

-- AlterTable
ALTER TABLE "Department" DROP COLUMN "campusId";

-- AlterTable
ALTER TABLE "GalleryImage" ADD COLUMN     "span" "GallerySpan" NOT NULL DEFAULT 'NORMAL',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "News" ADD COLUMN     "category" TEXT;

-- CreateTable
CREATE TABLE "DepartmentCampus" (
    "departmentId" TEXT NOT NULL,
    "campusId" TEXT NOT NULL,

    CONSTRAINT "DepartmentCampus_pkey" PRIMARY KEY ("departmentId","campusId")
);

-- CreateTable
CREATE TABLE "Testimonial" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "quote" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DepartmentCampus_campusId_idx" ON "DepartmentCampus"("campusId");

-- CreateIndex
CREATE INDEX "AdmissionApplication_courseId_idx" ON "AdmissionApplication"("courseId");

-- CreateIndex
CREATE INDEX "AdmissionApplication_status_idx" ON "AdmissionApplication"("status");

-- CreateIndex
CREATE INDEX "Course_departmentId_idx" ON "Course"("departmentId");

-- CreateIndex
CREATE INDEX "Course_campusId_idx" ON "Course"("campusId");

-- CreateIndex
CREATE INDEX "Course_intakeStatus_idx" ON "Course"("intakeStatus");

-- AddForeignKey
ALTER TABLE "DepartmentCampus" ADD CONSTRAINT "DepartmentCampus_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DepartmentCampus" ADD CONSTRAINT "DepartmentCampus_campusId_fkey" FOREIGN KEY ("campusId") REFERENCES "Campus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_campusId_fkey" FOREIGN KEY ("campusId") REFERENCES "Campus"("id") ON DELETE SET NULL ON UPDATE CASCADE;
