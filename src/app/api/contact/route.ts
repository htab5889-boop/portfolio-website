import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

// In-memory rate limiting map: IP -> timestamp array
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute window
  const maxRequests = 5; // Max 5 requests per minute

  const timestamps = (rateLimitMap.get(ip) || []).filter(t => now - t < windowMs);
  
  if (timestamps.length >= maxRequests) {
    return true;
  }

  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);

  // Periodic cleanup if map grows
  if (rateLimitMap.size > 1000) {
    rateLimitMap.forEach((times, key) => {
      const valid = times.filter((t: number) => now - t < windowMs);
      if (valid.length === 0) rateLimitMap.delete(key);
      else rateLimitMap.set(key, valid);
    });
  }

  return false;
}

export async function POST(req: Request) {
  // Rate limiting check
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || req.headers.get('x-real-ip') || 'anonymous';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a moment before sending another message.' },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const { name, email, category, details, _hp } = body;

    // Honeypot check: If filled, bot triggered it. Silently return success.
    if (_hp) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Type checking
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof category !== 'string' ||
      typeof details !== 'string'
    ) {
      return NextResponse.json(
        { error: 'Invalid input data.' },
        { status: 400 }
      );
    }

    const cleanName = name.trim().slice(0, 100);
    const cleanEmail = email.trim().slice(0, 254);
    const cleanCategory = category.trim().slice(0, 150);
    const cleanDetails = details.trim().slice(0, 3000);

    // Basic presence & length validation
    if (cleanName.length < 2 || cleanDetails.length < 5) {
      return NextResponse.json(
        { error: 'Name and project details must contain valid information.' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('Email API Error: RESEND_API_KEY is not configured in environment.');
      return NextResponse.json(
        { error: 'Email service is temporarily unavailable.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Sanitize subject line against CRLF injection
    const sanitizedSubject = `[Project Inquiry] ${cleanCategory.replace(/[\r\n]/g, ' ')} - ${cleanName.replace(/[\r\n]/g, ' ')}`;

    // Send the email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'princeahirwar.dev@gmail.com',
      subject: sanitizedSubject,
      replyTo: cleanEmail,
      text: `New freelance project inquiry received!\n\nName: ${cleanName}\nEmail: ${cleanEmail}\nCategory: ${cleanCategory}\n\nProject Details:\n${cleanDetails}`,
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
