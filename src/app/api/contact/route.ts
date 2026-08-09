// src/app/api/contact/route.ts

import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = clean(body.name);
    const email = clean(body.email);
    const subject = clean(body.subject);
    const message = clean(body.message);

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Please complete all fields." },
        { status: 400 },
      );
    }

    if (name.length > 100 || subject.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { message: "One or more fields are too long." },
        { status: 400 },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    // Contact-message persistence/email delivery should be connected here
    // once the project's contact-message storage or email service is defined.

    return NextResponse.json(
      { message: "Message received successfully." },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { message: "Unable to process your message." },
      { status: 400 },
    );
  }
}