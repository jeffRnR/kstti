// prisma/seed.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.campus.upsert({
    where: { code: "KERUGOYA" },
    update: {},
    create: {
      name: "Kerugoya Campus",
      code: "KERUGOYA",
    },
  });

  await prisma.campus.upsert({
    where: { code: "RUAI" },
    update: {},
    create: {
      name: "Ruai Campus",
      code: "RUAI",
    },
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