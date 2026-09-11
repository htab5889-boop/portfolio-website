import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, category, details } = body;

    // Basic validation
    if (!name || !email || !category || !details) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    // Send the email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Free tier Resend domain
      to: 'princeahirwar.dev@gmail.com', // Your target email
      subject: `[Project Inquiry] ${category} - ${name}`,
      replyTo: email,
      text: `New freelance project inquiry received!\n\nName: ${name}\nEmail: ${email}\nCategory: ${category}\n\nProject Details:\n${details}`,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Email API Error:', error);
    return NextResponse.json(
      { error: 'Failed to send the email inquiry.' },
      { status: 500 }
    );
  }
}
