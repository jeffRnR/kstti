import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

function generateApplicationNumber() {
  const timestamp = Date.now().toString().slice(-8);
  const random = Math.floor(100 + Math.random() * 900);
  return `KSTTI-${timestamp}-${random}`;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "gender",
      "dateOfBirth",
      "county",
      "postalAddress",
      "campusId",
      "courseId",
      "modeOfStudy",
      "intake",
    ];

    for (const field of requiredFields) {
      const value = formData.get(field);
      if (!value || typeof value !== "string" || !value.trim()) {
        return NextResponse.json(
          { message: `${field} is required.` },
          { status: 400 },
        );
      }
    }

    const campusId = String(formData.get("campusId"));
    const courseId = String(formData.get("courseId"));

    const [campus, course] = await Promise.all([
      prisma.campus.findUnique({ where: { id: campusId } }),
      prisma.course.findUnique({ where: { id: courseId } }),
    ]);

    if (!campus) {
      return NextResponse.json(
        { message: "Selected campus was not found." },
        { status: 400 },
      );
    }

    if (!course) {
      return NextResponse.json(
        { message: "Selected course was not found." },
        { status: 400 },
      );
    }

    const modeOfStudy = String(formData.get("modeOfStudy")) as
      | "FULL_TIME"
      | "PART_TIME";

    const intake = String(formData.get("intake")) as
      | "JANUARY"
      | "MAY"
      | "SEPTEMBER";

    const validModes = ["FULL_TIME", "PART_TIME"];
    const validIntakes = ["JANUARY", "MAY", "SEPTEMBER"];

    if (!validModes.includes(modeOfStudy)) {
      return NextResponse.json(
        { message: "Invalid mode of study." },
        { status: 400 },
      );
    }

    if (!validIntakes.includes(intake)) {
      return NextResponse.json(
        { message: "Invalid intake selected." },
        { status: 400 },
      );
    }

    const applicationNumber = generateApplicationNumber();

    const application = await prisma.admissionApplication.create({
      data: {
        applicationNumber,

        firstName: String(formData.get("firstName")),
        middleName: String(formData.get("middleName") || ""),
        lastName: String(formData.get("lastName")),

        email: String(formData.get("email")),
        phone: String(formData.get("phone")),

        gender: String(formData.get("gender")) as "MALE" | "FEMALE" | "OTHER",
        dateOfBirth: new Date(String(formData.get("dateOfBirth"))),

        nationality: "",
        county: String(formData.get("county")),
        subCounty: String(formData.get("subCounty") || ""),
        postalAddress: String(formData.get("postalAddress")),

        guardianName: String(formData.get("guardianName") || ""),
        guardianPhone: String(formData.get("guardianPhone") || ""),

        kcseIndexNumber: String(formData.get("kcseIndexNumber") || ""),
        kcseGrade: String(formData.get("kcseGrade") || ""),

        nationalId: String(formData.get("nationalId") || ""),

        modeOfStudy,
        intake,

        courseId,
      },
    });

    return NextResponse.json(
      {
        success: true,
        applicationNumber: application.applicationNumber,
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { message: "Unable to submit application." },
      { status: 500 },
    );
  }
}