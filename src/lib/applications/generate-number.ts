// src/lib/applications/generate-number.ts

export function generateApplicationNumber(): string {
  const timestamp = Date.now().toString().slice(-8);
  const random = Math.floor(100 + Math.random() * 900);

  return `KSTTI-${timestamp}-${random}`;
}