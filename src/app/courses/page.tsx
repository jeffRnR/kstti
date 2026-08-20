
import prisma from "@/lib/prisma";
import CoursesPage from "./CoursesPage";

export const metadata = {
  title: "Courses",
};

export default async function Page() {
  const [courses, departments] = await Promise.all([
    prisma.course.findMany({
      where: { isActive: true },
      include: { department: true },
      orderBy: { createdAt: "asc" },
    }),
    prisma.department.findMany({
      where: { isActive: true },
      orderBy: { name: "asc" },
    }),
  ]);

  return (
    <CoursesPage
      courses={courses.map((course) => ({
        id: course.id,
        name: course.name,
        department: course.department.name,
        intakeStatus: course.intakeStatus as "OPEN" | "CLOSING_SOON" | "CLOSED",
        duration: course.duration,
        campus: course.campusLabel,
        feePerSemester: course.feePerSemester ?? "",
      }))}
      departments={departments.map((department) => ({
        id: department.id,
        name: department.name,
      }))}
    />
  );
}