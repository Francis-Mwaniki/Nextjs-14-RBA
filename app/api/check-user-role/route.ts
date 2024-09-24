// pages/api/check-user-role.ts or app/api/check-user-role/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
  import jwt from 'jsonwebtoken';

export async function GET(req: Request) {
  const token = req.headers.get('cookie')?.split('; ').find(row => row.startsWith('token='))?.split('=')[1];

  if (!token) {
    return NextResponse.json({ message: "No token found" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number, role: string };
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, email: true, role: true }
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "User role retrieved",
      user: {
        id: user.id,
        email: user.email,
        role: user.role
      },
      tokenRole: decoded.role
    });
  } catch {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}