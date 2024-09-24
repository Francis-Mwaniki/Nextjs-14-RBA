import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const { name, email, password, inviteCode } = await req.json();
    console.log("Register request received:", { name, email, inviteCode });

    // Check if the invite code is valid
    const invite = await prisma.invite.findUnique({
      where: { code: inviteCode, used: false },
    });

    console.log("Invite found:", invite);
    if (!invite) {
      return NextResponse.json({
        message: "Invalid or used invite code",
        status: 400,
      });
    }

    // Check if the invite has expired
    if (invite.expiresAt < new Date()) {
      return NextResponse.json({
        message: "Invite code has expired",
        status: 400,
      });
    }

    // Check if the email matches the invited email
    if (invite.email !== email) {
      return NextResponse.json({
        message: "Email does not match the invited email",
        status: 400,
      });
    }

    // Create the user
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: invite.role,
      },
    });

    // Mark the invite as used
    await prisma.invite.update({
      where: { id: invite.id },
      data: { used: true },
    });

    // Send welcome email
    await sendEmail(
      email,
      "Welcome to Our App",
      `<h1>Welcome, ${name}!</h1><p>Your account has been created successfully with the role of ${invite.role}.</p>`
    );

    return NextResponse.json({
      message: "User registered successfully",
      status: 200,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({
      message: "An error occurred during registration",
      status: 500,
    });
  }
}