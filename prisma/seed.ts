import "dotenv/config";

import {
  PrismaClient,
  CampusCode,
  GallerySpan,
  IntakeStatus,
} from "../src/generated/prisma";

import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined");
}

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  /*
   * Clear website content in dependency order.
   */
  await prisma.testimonial.deleteMany();
  await prisma.galleryImage.deleteMany();
  await prisma.news.deleteMany();

  /*
   * Remove application/student/staff/user data only if they exist
   * before clearing courses/campuses.
   *
   * The website seed itself does not create these records.
   */
  await prisma.course.deleteMany();
  await prisma.departmentCampus.deleteMany();
  await prisma.department.deleteMany();
  await prisma.campus.deleteMany();

  /*
   * Campuses
   */
  const kerugoya = await prisma.campus.create({
    data: {
      name: "Kerugoya Campus",
      code: CampusCode.KERUGOYA,
      location: "Kerugoya Town, Kirinyaga County",
      address: "P.O. Box 123-10304, Kerugoya",
      description:
        "The Kerugoya Campus is our founding site, set in the heart of Kirinyaga County. It hosts fully-equipped workshops, modern ICT labs, and a dedicated beauty studio, providing students with hands-on training in a supportive environment.",
      directions:
        "From Kerugoya town centre, take the Kutus Road heading east. The campus is approximately 500 m past the Total petrol station on your left, behind the blue perimeter wall.",
      phone: "+254 720 000 001",
      email: "kerugoya@kstti.ac.ke",
      image: "https://picsum.photos/seed/kerugoya/800/600",
      mapsUrl: "https://maps.google.com/?q=Kerugoya,Kenya",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0!2d37.283!3d-0.499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMCXCsDI5JzU2LjQiUyAzN8KwMTYnNTguOCJF!5e0!3m2!1sen!2ske!4v1600000000000!5m2!1sen!2ske",
    },
  });

  const ruai = await prisma.campus.create({
    data: {
      name: "Ruai Campus",
      code: CampusCode.RUAI,
      location: "Ruai, Nairobi County",
      address: "P.O. Box 456-00200, Nairobi",
      description:
        "The Ruai Campus brings KSTTI's practical training model to Nairobi's eastern corridor. With spacious technical workshops, a hospitality training kitchen, and a well-stocked library, students here benefit from an urban campus close to industry and employment opportunities.",
      directions:
        "Along Kangundo Road, alight at the Ruai stage. Walk 200 m towards the Ruai market junction and turn left at the KCB branch. The campus gate is 100 m on your right.",
      phone: "+254 720 000 002",
      email: "ruai@kstti.ac.ke",
      image: "https://picsum.photos/seed/ruai/800/600",
      mapsUrl: "https://maps.google.com/?q=Ruai,Nairobi,Kenya",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.0!2d36.974!3d-1.267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnMDEuMiJTIDM2wrA1OCczNi42IkU!5e0!3m2!1sen!2ske!4v1600000000001!5m2!1sen!2ske",
    },
  });

  /*
   * Departments
   */
  const departments = [
    {
      name: "Beauty & Cosmetology",
      slug: "beauty-cosmetology",
      description:
        "Professional training in beauty therapy, hairdressing, barbering, and nail technology.",
    },
    {
      name: "Information Communication Technology",
      slug: "information-communication-technology",
      description:
        "Practical ICT training focused on modern digital skills and computing technologies.",
    },
    {
      name: "Business Studies",
      slug: "business-studies",
      description:
        "Industry-oriented programmes that prepare learners for business and entrepreneurship.",
    },
    {
      name: "Hospitality",
      slug: "hospitality",
      description:
        "Hands-on hospitality training covering food production, customer service, and catering.",
    },
    {
      name: "Technical Studies",
      slug: "technical-studies",
      description:
        "Technical programmes designed to develop practical workplace and self-employment skills.",
    },
    {
      name: "Short Professional Courses",
      slug: "short-professional-courses",
      description:
        "Flexible short courses for learners seeking practical skills and career advancement.",
    },
  ];

  const createdDepartments = await Promise.all(
    departments.map((department) =>
      prisma.department.create({
        data: {
          name: department.name,
          slug: department.slug,
          description: department.description,
          campuses: {
            create: [
              {
                campusId: kerugoya.id,
              },
              {
                campusId: ruai.id,
              },
            ],
          },
        },
      }),
    ),
  );

  const departmentMap = new Map(
    createdDepartments.map((department) => [
      department.name,
      department.id,
    ]),
  );

  /*
   * Courses
   */
  const courses = [
    {
      name: "Certificate in Beauty Therapy",
      department: "Beauty & Cosmetology",
      intakeStatus: IntakeStatus.OPEN,
      duration: "2 Semesters",
      campusLabel: "Main Campus",
      feePerSemester: "KES 18,500",
    },
    {
      name: "Diploma in Hairdressing & Cosmetology",
      department: "Beauty & Cosmetology",
      intakeStatus: IntakeStatus.OPEN,
      duration: "4 Semesters",
      campusLabel: "Main Campus",
      feePerSemester: "KES 22,000",
    },
    {
      name: "Certificate in Barbering",
      department: "Beauty & Cosmetology",
      intakeStatus: IntakeStatus.CLOSING_SOON,
      duration: "2 Semesters",
      campusLabel: "Town Campus",
      feePerSemester: "KES 15,000",
    },
    {
      name: "Certificate in Nail Technology",
      department: "Beauty & Cosmetology",
      intakeStatus: IntakeStatus.CLOSED,
      duration: "1 Semester",
      campusLabel: "Main Campus",
      feePerSemester: "KES 12,000",
    },
    {
      name: "Certificate in Computer Applications",
      department: "Information Communication Technology",
      intakeStatus: IntakeStatus.OPEN,
      duration: "2 Semesters",
      campusLabel: "Main Campus",
      feePerSemester: "KES 16,000",
    },
    {
      name: "Diploma in Information Technology",
      department: "Information Communication Technology",
      intakeStatus: IntakeStatus.OPEN,
      duration: "6 Semesters",
      campusLabel: "Main Campus",
      feePerSemester: "KES 24,500",
    },
    {
      name: "Certificate in Graphic Design",
      department: "Information Communication Technology",
      intakeStatus: IntakeStatus.CLOSING_SOON,
      duration: "2 Semesters",
      campusLabel: "Town Campus",
      feePerSemester: "KES 19,000",
    },
    {
      name: "Certificate in Web Development",
      department: "Information Communication Technology",
      intakeStatus: IntakeStatus.OPEN,
      duration: "3 Semesters",
      campusLabel: "Main Campus",
      feePerSemester: "KES 21,000",
    },
    {
      name: "Certificate in Business Administration",
      department: "Business Studies",
      intakeStatus: IntakeStatus.OPEN,
      duration: "2 Semesters",
      campusLabel: "Main Campus",
      feePerSemester: "KES 14,500",
    },
    {
      name: "Diploma in Accounting & Finance",
      department: "Business Studies",
      intakeStatus: IntakeStatus.OPEN,
      duration: "6 Semesters",
      campusLabel: "Main Campus",
      feePerSemester: "KES 20,000",
    },
    {
      name: "Certificate in Office Administration",
      department: "Business Studies",
      intakeStatus: IntakeStatus.CLOSING_SOON,
      duration: "2 Semesters",
      campusLabel: "Town Campus",
      feePerSemester: "KES 13,500",
    },
    {
      name: "Certificate in Entrepreneurship",
      department: "Business Studies",
      intakeStatus: IntakeStatus.OPEN,
      duration: "2 Semesters",
      campusLabel: "Main Campus",
      feePerSemester: "KES 14,000",
    },
    {
      name: "Certificate in Food & Beverage",
      department: "Hospitality",
      intakeStatus: IntakeStatus.OPEN,
      duration: "2 Semesters",
      campusLabel: "Main Campus",
      feePerSemester: "KES 17,500",
    },
    {
      name: "Diploma in Hospitality Management",
      department: "Hospitality",
      intakeStatus: IntakeStatus.CLOSED,
      duration: "6 Semesters",
      campusLabel: "Main Campus",
      feePerSemester: "KES 23,000",
    },
    {
      name: "Certificate in Catering & Nutrition",
      department: "Hospitality",
      intakeStatus: IntakeStatus.OPEN,
      duration: "3 Semesters",
      campusLabel: "Town Campus",
      feePerSemester: "KES 16,500",
    },
    {
      name: "Certificate in Electrical Installation",
      department: "Technical Studies",
      intakeStatus: IntakeStatus.OPEN,
      duration: "4 Semesters",
      campusLabel: "Main Campus",
      feePerSemester: "KES 19,500",
    },
    {
      name: "Certificate in Plumbing & Pipefitting",
      department: "Technical Studies",
      intakeStatus: IntakeStatus.OPEN,
      duration: "3 Semesters",
      campusLabel: "Main Campus",
      feePerSemester: "KES 18,000",
    },
    {
      name: "Certificate in Welding & Fabrication",
      department: "Technical Studies",
      intakeStatus: IntakeStatus.CLOSING_SOON,
      duration: "3 Semesters",
      campusLabel: "Town Campus",
      feePerSemester: "KES 17,000",
    },
    {
      name: "Certificate in Motor Vehicle Mechanics",
      department: "Technical Studies",
      intakeStatus: IntakeStatus.OPEN,
      duration: "4 Semesters",
      campusLabel: "Main Campus",
      feePerSemester: "KES 21,500",
    },
    {
      name: "Digital Marketing Essentials",
      department: "Short Professional Courses",
      intakeStatus: IntakeStatus.OPEN,
      duration: "6 Weeks",
      campusLabel: "Main Campus",
      feePerSemester: "KES 8,500",
    },
    {
      name: "Spoken English & Communication",
      department: "Short Professional Courses",
      intakeStatus: IntakeStatus.OPEN,
      duration: "8 Weeks",
      campusLabel: "Town Campus",
      feePerSemester: "KES 7,000",
    },
    {
      name: "QuickBooks Accounting",
      department: "Short Professional Courses",
      intakeStatus: IntakeStatus.CLOSING_SOON,
      duration: "4 Weeks",
      campusLabel: "Main Campus",
      feePerSemester: "KES 6,500",
    },
    {
      name: "Basic Sewing & Tailoring",
      department: "Short Professional Courses",
      intakeStatus: IntakeStatus.OPEN,
      duration: "10 Weeks",
      campusLabel: "Town Campus",
      feePerSemester: "KES 9,000",
    },
  ];

  for (const course of courses) {
    const departmentId = departmentMap.get(course.department);

    if (!departmentId) {
      throw new Error(`Department not found: ${course.department}`);
    }

    await prisma.course.create({
      data: {
        name: course.name,
        slug: course.name
          .toLowerCase()
          .replace(/&/g, "and")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, ""),
        code: course.name
          .toUpperCase()
          .replace(/&/g, "AND")
          .replace(/[^A-Z0-9]+/g, "-")
          .replace(/^-|-$/g, "")
          .slice(0, 40),
        duration: course.duration,
        intakeStatus: course.intakeStatus,
        campusLabel: course.campusLabel,
        feePerSemester: course.feePerSemester,
        departmentId,
      },
    });
  }

  /*
   * Gallery
   */
  const gallery = [
    {
      span: GallerySpan.TALL,
      title: "Practical Training",
    },
    {
      span: GallerySpan.NORMAL,
      title: "Campus Life",
    },
    {
      span: GallerySpan.NORMAL,
      title: "Student Activities",
    },
    {
      span: GallerySpan.NORMAL,
      title: "ICT Lab",
    },
    {
      span: GallerySpan.TALL,
      title: "Beauty Workshop",
    },
    {
      span: GallerySpan.NORMAL,
      title: "Graduation Day",
    },
    {
      span: GallerySpan.NORMAL,
      title: "Hospitality Class",
    },
    {
      span: GallerySpan.WIDE_TALL,
      title: "Main Campus",
    },
    {
      span: GallerySpan.NORMAL,
      title: "Technical Workshop",
    },
    {
      span: GallerySpan.TALL,
      title: "Student Projects",
    },
    {
      span: GallerySpan.NORMAL,
      title: "Sports Day",
    },
    {
      span: GallerySpan.NORMAL,
      title: "Library",
    },
    {
      span: GallerySpan.NORMAL,
      title: "Open Day",
    },
    {
      span: GallerySpan.TALL,
      title: "Barbering Studio",
    },
    {
      span: GallerySpan.NORMAL,
      title: "Business Class",
    },
    {
      span: GallerySpan.NORMAL,
      title: "Awards Ceremony",
    },
  ];

  for (const item of gallery) {
    await prisma.galleryImage.create({
      data: {
        title: item.title,
        image: "",
        span: item.span,
      },
    });
  }

  /*
   * News
   */
  await prisma.news.createMany({
    data: [
      {
        title: "July 2026 Intake Ongoing",
        slug: "july-2026-intake-ongoing",
        excerpt:
          "Applications are open for our ongoing intake across all programmes at both campuses. Apply online and begin your training journey at KSTTI.",
        content:
          "Applications are open for our ongoing intake across all programmes at both campuses. Apply online and begin your training journey at KSTTI.",
        category: "Admissions",
        coverImage:
          "https://picsum.photos/800/600?random=23",
        published: true,
      },
      {
        title: "Industry Focused Training",
        slug: "industry-focused-training",
        excerpt:
          "Our programmes continue to emphasize practical learning and workplace readiness, ensuring graduates are equipped for employment and entrepreneurship.",
        content:
          "Our programmes continue to emphasize practical learning and workplace readiness, ensuring graduates are equipped for employment and entrepreneurship.",
        category: "Academics",
        coverImage:
          "https://picsum.photos/800/600?random=24",
        published: true,
      },
      {
        title: "Student Support Services",
        slug: "student-support-services",
        excerpt:
          "KSTTI continues to provide personalized support through small class sizes and dedicated instructors committed to every learner's success.",
        content:
          "KSTTI continues to provide personalized support through small class sizes and dedicated instructors committed to every learner's success.",
        category: "Student Life",
        coverImage:
          "https://picsum.photos/800/600?random=25",
        published: true,
      },
    ],
  });

  /*
   * Testimonials
   */
  await prisma.testimonial.createMany({
    data: [
      {
        name: "Student",
        course: "ICT",
        quote:
          "The practical approach and supportive instructors helped me build confidence and job ready skills.",
      },
      {
        name: "Graduate",
        course: "Beauty Therapy",
        quote:
          "Small class sizes allowed me to receive individual guidance throughout my training.",
      },
      {
        name: "Alumni",
        course: "Building Technology",
        quote:
          "KSTTI prepared me with practical experience that made my transition into the workplace much easier.",
      },
    ],
  });

  console.log("KSTTI seed completed successfully.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });