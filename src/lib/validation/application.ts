// src/lib/validation/application.ts

export const requiredApplicationFields = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "gender",
  "dateOfBirth",
  "nationality",
  "county",
  "postalAddress",
  "campusId",
  "courseId",
] as const;

export function validateApplicationField(
  value: FormDataEntryValue | null,
): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}