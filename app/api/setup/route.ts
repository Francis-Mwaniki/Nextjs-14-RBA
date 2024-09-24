import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    // Check if any users exist
    const userCount = await prisma.user.count();
    if (userCount > 0) {
      return NextResponse.json({
        message: "Setup has already been completed",
        status: 400,
      });
    }

    const { name, email, password } = await req.json();

    // Create the admin user
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "ADMIN",
      },
    });

    return NextResponse.json({
      message: "Admin user created successfully",
      status: 200,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Setup error:", error);
    return NextResponse.json({
      message: "An error occurred during setup",
      status: 500,
    });
  }
}