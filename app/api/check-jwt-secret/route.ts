// pages/api/check-jwt-secret.ts or app/api/check-jwt-secret/route.ts
import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic';
export async function GET() {
  return NextResponse.json({
    jwtSecretSet: !!process.env.JWT_SECRET,
    jwtSecretLength: process.env.JWT_SECRET?.length
  });
}