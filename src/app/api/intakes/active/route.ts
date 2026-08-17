import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const intake = await prisma.intakeSession.findFirst({
      where: {
        isActive: true,
        applicationOpen: true,
      },
      select: {
        id: true,
        name: true,
        applicationOpen: true,
        applicationDeadline: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ intake: intake ?? null });
  } catch {
    return NextResponse.json({ intake: null }, { status: 500 });
  }
}