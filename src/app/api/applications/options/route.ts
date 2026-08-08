// src/app/api/applications/options/route.ts

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const campuses = await prisma.campus.findMany({
    orderBy: { name: "asc" },
    select: {
      id: true,
      name: true,
    },
  });

  const courses = await prisma.course.findMany({
    orderBy: { name: "asc" },
    select: {
      id: true,
      name: true,
      department: {
        select: {
          name: true,
        },
      },
    },
  });

  return NextResponse.json({
    campuses,
    courses: courses.map(
      (course: {
        id: string;
        name: string;
        department: { name: string };
      }) => ({
        id: course.id,
        name: course.name,
        department: course.department.name,
      }),
    ),
  });
}