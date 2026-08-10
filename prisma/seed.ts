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

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

// -----------------------------------------------------------------------------
// TYPES
// -----------------------------------------------------------------------------

type CourseSeed = {
  name: string;
  department: string;
  intakeStatus: IntakeStatus;
  duration: string;
  feePerSemester: string;
};

// -----------------------------------------------------------------------------
// DATA
// -----------------------------------------------------------------------------

const COURSES: CourseSeed[] = [
  // ── School of Cosmetology, Fashion & Design ──────────────────────────────
  { name: "Diploma in Cosmetology", department: "School of Cosmetology, Fashion & Design", intakeStatus: IntakeStatus.OPEN, duration: "1½ Years", feePerSemester: "KES 17,500" },
  { name: "Certificate in Cosmetology", department: "School of Cosmetology, Fashion & Design", intakeStatus: IntakeStatus.OPEN, duration: "1 Year", feePerSemester: "KES 17,500" },
  { name: "Diploma in Hairdressing", department: "School of Cosmetology, Fashion & Design", intakeStatus: IntakeStatus.OPEN, duration: "1 Year", feePerSemester: "KES 17,500" },
  { name: "Certificate in Hairdressing", department: "School of Cosmetology, Fashion & Design", intakeStatus: IntakeStatus.OPEN, duration: "1 Year", feePerSemester: "KES 17,500" },
  { name: "Artisan in Hairdressing", department: "School of Cosmetology, Fashion & Design", intakeStatus: IntakeStatus.OPEN, duration: "1 Year", feePerSemester: "KES 17,500" },
  { name: "Diploma in Beauty Therapy", department: "School of Cosmetology, Fashion & Design", intakeStatus: IntakeStatus.OPEN, duration: "1 Year", feePerSemester: "KES 17,500" },
  { name: "Certificate in Beauty Therapy", department: "School of Cosmetology, Fashion & Design", intakeStatus: IntakeStatus.OPEN, duration: "1 Year", feePerSemester: "KES 17,500" },
  { name: "Artisan in Beauty Therapy", department: "School of Cosmetology, Fashion & Design", intakeStatus: IntakeStatus.OPEN, duration: "1 Year", feePerSemester: "KES 17,500" },
  { name: "Adv. Hairdressing & Beauty Therapy", department: "School of Cosmetology, Fashion & Design", intakeStatus: IntakeStatus.OPEN, duration: "1 Year", feePerSemester: "KES 20,000" },
  { name: "Diploma in Fashion & Design", department: "School of Cosmetology, Fashion & Design", intakeStatus: IntakeStatus.OPEN, duration: "2 Years", feePerSemester: "KES 17,500" },
  { name: "Certificate in Fashion & Design", department: "School of Cosmetology, Fashion & Design", intakeStatus: IntakeStatus.OPEN, duration: "1½ Years", feePerSemester: "KES 17,500" },
  { name: "Artisan in Fashion & Design", department: "School of Cosmetology, Fashion & Design", intakeStatus: IntakeStatus.OPEN, duration: "1 Year", feePerSemester: "KES 17,500" },
  { name: "Interior Design", department: "School of Cosmetology, Fashion & Design", intakeStatus: IntakeStatus.OPEN, duration: "9 Months", feePerSemester: "KES 17,500" },
  { name: "Trainer of Trainers", department: "School of Cosmetology, Fashion & Design", intakeStatus: IntakeStatus.OPEN, duration: "9 Months", feePerSemester: "KES 17,500" },
  { name: "Full Body Massage", department: "School of Cosmetology, Fashion & Design", intakeStatus: IntakeStatus.OPEN, duration: "1 Semester", feePerSemester: "KES 17,500" },
  { name: "Braiding", department: "School of Cosmetology, Fashion & Design", intakeStatus: IntakeStatus.OPEN, duration: "1 Semester", feePerSemester: "KES 17,500" },
  { name: "Nail Technology", department: "School of Cosmetology, Fashion & Design", intakeStatus: IntakeStatus.OPEN, duration: "1 Semester", feePerSemester: "KES 17,500" },
  { name: "Dreadlocks", department: "School of Cosmetology, Fashion & Design", intakeStatus: IntakeStatus.OPEN, duration: "1 Semester", feePerSemester: "KES 17,500" },
  { name: "Barbering & Haircutting", department: "School of Cosmetology, Fashion & Design", intakeStatus: IntakeStatus.OPEN, duration: "1 Semester", feePerSemester: "KES 17,500" },
  { name: "Facial Treatment", department: "School of Cosmetology, Fashion & Design", intakeStatus: IntakeStatus.OPEN, duration: "1 Semester", feePerSemester: "KES 17,500" },
  { name: "Make Up", department: "School of Cosmetology, Fashion & Design", intakeStatus: IntakeStatus.OPEN, duration: "1 Semester", feePerSemester: "KES 17,500" },

  // ── School of ICT Computing & Informatics ────────────────────────────────
  { name: "Diploma in ICT", department: "School of ICT Computing & Informatics", intakeStatus: IntakeStatus.OPEN, duration: "2 Years", feePerSemester: "KES 17,500" },
  { name: "Certificate in ICT", department: "School of ICT Computing & Informatics", intakeStatus: IntakeStatus.OPEN, duration: "1½ Years", feePerSemester: "KES 17,500" },
  { name: "Artisan in ICT", department: "School of ICT Computing & Informatics", intakeStatus: IntakeStatus.OPEN, duration: "3 Semesters", feePerSemester: "KES 17,500" },
  { name: "Graphic Design", department: "School of ICT Computing & Informatics", intakeStatus: IntakeStatus.OPEN, duration: "2 Semesters", feePerSemester: "KES 17,500" },
  { name: "Web Design & Development", department: "School of ICT Computing & Informatics", intakeStatus: IntakeStatus.OPEN, duration: "2 Semesters", feePerSemester: "KES 17,500" },
  { name: "Software Development", department: "School of ICT Computing & Informatics", intakeStatus: IntakeStatus.OPEN, duration: "2 Semesters", feePerSemester: "KES 17,500" },
  { name: "Mobile App Development", department: "School of ICT Computing & Informatics", intakeStatus: IntakeStatus.OPEN, duration: "2 Semesters", feePerSemester: "KES 17,500" },
  { name: "Computer Repair & Maintenance", department: "School of ICT Computing & Informatics", intakeStatus: IntakeStatus.OPEN, duration: "1 Semester", feePerSemester: "KES 17,500" },
  { name: "Computer Packages", department: "School of ICT Computing & Informatics", intakeStatus: IntakeStatus.OPEN, duration: "1 Month", feePerSemester: "KES 5,000" },

  // ── School of Building & Civil Engineering ───────────────────────────────
  { name: "Plumbing Certificate Level 5", department: "School of Building & Civil Engineering", intakeStatus: IntakeStatus.OPEN, duration: "4 Semesters", feePerSemester: "KES 17,500" },
  { name: "Artisan in Plumbing", department: "School of Building & Civil Engineering", intakeStatus: IntakeStatus.OPEN, duration: "4 Semesters", feePerSemester: "KES 17,500" },
  { name: "Plumbing Open", department: "School of Building & Civil Engineering", intakeStatus: IntakeStatus.OPEN, duration: "6 Months", feePerSemester: "KES 17,500" },
  { name: "Carpentry and Joinery", department: "School of Building & Civil Engineering", intakeStatus: IntakeStatus.OPEN, duration: "1½ Years", feePerSemester: "KES 17,500" },
  { name: "Artisan in Carpentry & Joinery", department: "School of Building & Civil Engineering", intakeStatus: IntakeStatus.OPEN, duration: "9 Months", feePerSemester: "KES 17,500" },
  { name: "Painting & Decorations", department: "School of Building & Civil Engineering", intakeStatus: IntakeStatus.OPEN, duration: "9 Months", feePerSemester: "KES 17,500" },

  // ── School of Electrical & Electronic Engineering ────────────────────────
  { name: "Diploma in Electrical & Electronic Engineering (Power Option)", department: "School of Electrical & Electronic Engineering", intakeStatus: IntakeStatus.OPEN, duration: "2 Years", feePerSemester: "KES 17,500" },
  { name: "Certificate in Electrical Installation", department: "School of Electrical & Electronic Engineering", intakeStatus: IntakeStatus.OPEN, duration: "1 Year", feePerSemester: "KES 17,500" },
  { name: "Electrical Wireman", department: "School of Electrical & Electronic Engineering", intakeStatus: IntakeStatus.OPEN, duration: "1½ Years", feePerSemester: "KES 17,500" },
  { name: "CCTV Installation", department: "School of Electrical & Electronic Engineering", intakeStatus: IntakeStatus.OPEN, duration: "6 Months", feePerSemester: "KES 17,500" },

  // ── School of Hospitality ────────────────────────────────────────────────
  { name: "Pastry & Cake Making", department: "School of Hospitality", intakeStatus: IntakeStatus.OPEN, duration: "6 Months", feePerSemester: "KES 20,000" },
  { name: "Barista & Bartending", department: "School of Hospitality", intakeStatus: IntakeStatus.OPEN, duration: "6 Months", feePerSemester: "KES 20,000" },
  { name: "Pies & Dessert", department: "School of Hospitality", intakeStatus: IntakeStatus.OPEN, duration: "3 Months", feePerSemester: "KES 20,000" },

  // ── School of Music ──────────────────────────────────────────────────────
  { name: "Vocal Training", department: "School of Music", intakeStatus: IntakeStatus.OPEN, duration: "3 Months", feePerSemester: "KES 17,500" },
  { name: "Musical Instruments (Piano)", department: "School of Music", intakeStatus: IntakeStatus.OPEN, duration: "3 Months", feePerSemester: "KES 17,500" },
  { name: "Musical Instruments (Guitar)", department: "School of Music", intakeStatus: IntakeStatus.OPEN, duration: "3 Months", feePerSemester: "KES 17,500" },

  // ── General Programmes ───────────────────────────────────────────────────
  { name: "Driving Class B & C", department: "General Programmes", intakeStatus: IntakeStatus.OPEN, duration: "1 Month", feePerSemester: "KES 17,000" },
];

// -----------------------------------------------------------------------------
// HELPERS
// -----------------------------------------------------------------------------

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function toCode(name: string): string {
  return name
    .toUpperCase()
    .replace(/&/g, "AND")
    .replace(/[^A-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
}

// -----------------------------------------------------------------------------
// MAIN
// -----------------------------------------------------------------------------

async function main() {
  console.log("Clearing existing data...");

  await prisma.testimonial.deleteMany();
  await prisma.galleryImage.deleteMany();
  await prisma.news.deleteMany();
  await prisma.course.deleteMany();
  await prisma.departmentCampus.deleteMany();
  await prisma.department.deleteMany();
  await prisma.campus.deleteMany();

  console.log("✓ Cleared");

  // ---------------------------------------------------------------------------
  // CAMPUSES
  // ---------------------------------------------------------------------------

  console.log("Creating campuses...");

  const kerugoya = await prisma.campus.create({
    data: {
      name: "Kerugoya Campus",
      code: CampusCode.KERUGOYA,
      location: "Kerugoya Town, Kirinyaga County",
      address: "P.O. Box 123-10304, Kerugoya",
      description:
        "The Kerugoya Campus is our founding site, set in the heart of Kirinyaga County. It hosts fully-equipped workshops, modern ICT labs, and a dedicated beauty studio, providing students with hands-on training in a supportive environment.",
      directions: "Kerugoya Town, Anchor Plaza, 3rd Floor, Behind Family Bank",
      phone: "+254 713 255 342",
      email: "kerugoya@kstti.ac.ke",
      image: "https://picsum.photos/seed/kerugoya/800/600",
      mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d37.2769641!3d-0.5046316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182881001c5c1475%3A0x40c49b6cdde7a42e!2sAnchor%20Plaza%20Kerugoya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d37.2769641!3d-0.5046316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182881001c5c1475%3A0x40c49b6cdde7a42e!2sAnchor%20Plaza%20Kerugoya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske",
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
        "Ruai Town, Gatwick Business Center, room D28, Next to Naivas supermarket",
      phone: "+254 798 469 493",
      email: "ruai@kstti.ac.ke",
      image: "https://picsum.photos/seed/ruai/800/600",
      mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.0!2d36.9916934!3d-1.2687497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6be50bf3fa1b%3A0x144d6f34a7ead2c0!2sAnavah%20Printers%20Kenya!5e0!3m2!1sen!2ske!4v1700000000001!5m2!1sen!2ske",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.0!2d36.9916934!3d-1.2687497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6be50bf3fa1b%3A0x144d6f34a7ead2c0!2sAnavah%20Printers%20Kenya!5e0!3m2!1sen!2ske!4v1700000000001!5m2!1sen!2ske",
    },
  });

  console.log("✓ Campuses created");

  // ---------------------------------------------------------------------------
  // DEPARTMENTS
  // ---------------------------------------------------------------------------

  console.log("Creating departments...");

  const departmentSeeds = [
    {
      name: "School of Cosmetology, Fashion & Design",
      slug: "school-of-cosmetology-fashion-design",
      description:
        "Professional training in cosmetology, beauty therapy, hairdressing, barbering, nail technology, interior design, fashion and design.",
    },
    {
      name: "School of ICT Computing & Informatics",
      slug: "school-of-ict-computing-informatics",
      description:
        "Practical ICT training focused on modern digital skills and computing technologies.",
    },
    {
      name: "School of Building & Civil Engineering",
      slug: "school-of-building-civil-engineering",
      description:
        "Training in building construction, civil engineering principles, and related technical skills.",
    },
    {
      name: "School of Electrical & Electronic Engineering",
      slug: "school-of-electrical-and-electronic-engineering",
      description:
        "Technical programmes designed to develop practical workplace and self-employment skills in Electrical and Electronic Engineering.",
    },
    {
      name: "School of Hospitality",
      slug: "school-of-hospitality",
      description:
        "Hands-on hospitality training covering food production, customer service, and catering.",
    },
    {
      name: "School of Music",
      slug: "school-of-music",
      description:
        "Comprehensive music training covering performance, theory, and production.",
    },
    {
      name: "General Programmes",
      slug: "general-programmes",
      description:
        "General programmes for learners seeking foundational or specialised skills outside the main schools.",
    },
  ];

  const createdDepartments = await Promise.all(
    departmentSeeds.map((dept) =>
      prisma.department.create({
        data: {
          name: dept.name,
          slug: dept.slug,
          description: dept.description,
          campuses: {
            create: [{ campusId: kerugoya.id }, { campusId: ruai.id }],
          },
        },
      }),
    ),
  );

  const departmentMap = new Map(
    createdDepartments.map((d) => [d.name, d.id]),
  );

  console.log(`✓ ${createdDepartments.length} departments created`);

  // ---------------------------------------------------------------------------
  // VALIDATE department references before inserting
  // ---------------------------------------------------------------------------

  const validDepartments = new Set(departmentSeeds.map((d) => d.name));
  const invalidCourses = COURSES.filter(
    (c) => !validDepartments.has(c.department),
  );

  if (invalidCourses.length > 0) {
    throw new Error(
      `The following courses reference unknown departments:\n` +
      invalidCourses
        .map((c) => `  "${c.name}" → "${c.department}"`)
        .join("\n"),
    );
  }

  // ---------------------------------------------------------------------------
  // COURSES
  // ---------------------------------------------------------------------------

  console.log("Creating courses...");

  for (const course of COURSES) {
    const departmentId = departmentMap.get(course.department)!;

    await prisma.course.create({
      data: {
        name: course.name,
        slug: toSlug(course.name),
        code: toCode(course.name),
        duration: course.duration,
        intakeStatus: course.intakeStatus,
        feePerSemester: course.feePerSemester,
        campusLabel: "Both Campuses",
        departmentId,
      },
    });
  }

  console.log(`✓ ${COURSES.length} courses created`);

  // ---------------------------------------------------------------------------
  // GALLERY
  // ---------------------------------------------------------------------------

  console.log("Creating gallery...");

  const gallery: { title: string; span: GallerySpan }[] = [
    { title: "Practical Training", span: GallerySpan.TALL },
    { title: "Campus Life", span: GallerySpan.NORMAL },
    { title: "Student Activities", span: GallerySpan.NORMAL },
    { title: "ICT Lab", span: GallerySpan.NORMAL },
    { title: "Beauty Workshop", span: GallerySpan.TALL },
    { title: "Graduation Day", span: GallerySpan.NORMAL },
    { title: "Hospitality Class", span: GallerySpan.NORMAL },
    { title: "Main Campus", span: GallerySpan.WIDE_TALL },
    { title: "Technical Workshop", span: GallerySpan.NORMAL },
    { title: "Student Projects", span: GallerySpan.TALL },
    { title: "Sports Day", span: GallerySpan.NORMAL },
    { title: "Library", span: GallerySpan.NORMAL },
    { title: "Open Day", span: GallerySpan.NORMAL },
    { title: "Barbering Studio", span: GallerySpan.TALL },
    { title: "Business Class", span: GallerySpan.NORMAL },
    { title: "Awards Ceremony", span: GallerySpan.NORMAL },
  ];

  await prisma.galleryImage.createMany({
    data: gallery.map((item) => ({
      title: item.title,
      image: "",
      span: item.span,
    })),
  });

  console.log(`✓ ${gallery.length} gallery images created`);

  // ---------------------------------------------------------------------------
  // NEWS
  // ---------------------------------------------------------------------------

  console.log("Creating news...");

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
        coverImage: "https://picsum.photos/800/600?random=23",
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
        coverImage: "https://picsum.photos/800/600?random=24",
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
        coverImage: "https://picsum.photos/800/600?random=25",
        published: true,
      },
    ],
  });

  console.log("✓ 3 news articles created");

  // ---------------------------------------------------------------------------
  // TESTIMONIALS
  // ---------------------------------------------------------------------------

  console.log("Creating testimonials...");

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

  console.log("✓ 3 testimonials created");

  // ---------------------------------------------------------------------------
  // SUMMARY
  // ---------------------------------------------------------------------------

  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("  Seed completed successfully");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log(`  Campuses:      2`);
  console.log(`  Departments:   ${createdDepartments.length}`);
  console.log(`  Courses:       ${COURSES.length}`);
  console.log(`  Gallery:       ${gallery.length}`);
  console.log(`  News:          3`);
  console.log(`  Testimonials:  3`);
  console.log();
}

// -----------------------------------------------------------------------------
// EXECUTE
// -----------------------------------------------------------------------------

main()
  .catch((error) => {
    console.error("\n✗ Seed failed:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });