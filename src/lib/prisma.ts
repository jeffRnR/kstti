// src/lib/prisma.ts

import "dotenv/config";
import { PrismaClient } from "../generated/prisma";
import { PrismaNeon } from "@prisma/adapter-neon";

const connectionString = process.env.DIRECT_URL;

if (!connectionString) {
  throw new Error("DIRECT_URL is not defined");
}

const adapter = new PrismaNeon({
  connectionString,
});

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;