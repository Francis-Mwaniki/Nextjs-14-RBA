// pages/api/check-cookie.ts or app/api/check-cookie/route.ts
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.json({ message: "No token found" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number, role: string };
    return NextResponse.json({
      message: "Token valid",
      userId: decoded.userId,
      role: decoded.role
    });
  } catch {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}