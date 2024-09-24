import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";
import { sendEmail } from "@/lib/email";
export const dynamic = 'force-dynamic';
export async function POST(req: Request) {
  try {
    const { email, role } = await req.json();

    // Generate a unique invite code
    const code = uuidv4();

    // Create the invite in the database
    const invite = await prisma.invite.create({
      data: {
        email,
        code,
        role,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Expires in 7 days
      },
    });

    const baseUrl = "http://localhost:3000" || "https://next-easy-rba.vercel.app";
    // Send the invite email
    await sendEmail(
      email,
      "Invitation to Join Our Platform",
      `<h1>You've been invited!</h1>
      <p>You've been invited to join our platform as a ${role}. Click the link below to register:</p>
      <a href="${baseUrl}/register?code=${code}">Register Now</a>`
    );

    return NextResponse.json({
      message: "Invite created and sent successfully",
      status: 200,
      invite: {
        id: invite.id,
        email: invite.email,
        role: invite.role,
      },
    });
  } catch (error: unknown) {
    console.error("Create invite error:", error);
    return NextResponse.json({
      message: "An error occurred while creating the invite",
      status: 500,
    });
  }
}