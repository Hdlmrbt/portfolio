import { NextRequest, NextResponse } from 'next/server';

/**
 * Contact form API endpoint.
 *
 * TO CONNECT A REAL EMAIL SERVICE:
 * 1. Install Resend: npm install resend
 * 2. Add RESEND_API_KEY to .env.local
 * 3. Replace the mock response below with:
 *
 *   import { Resend } from 'resend';
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({
 *     from: 'portfolio@yourdomain.com',
 *     to:   'houdalamrabet104@gmail.com',
 *     subject: `[Portfolio] New message from ${name}`,
 *     html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
 *   });
 */

interface ContactPayload {
  name:    string;
  email:   string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 },
      );
    }

    // TODO: Replace this section with your preferred email service
    // Currently logs to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📧 Contact form submission:', { name, email, subject, message });
    }

    return NextResponse.json(
      { success: true, message: 'Your message has been received. I\'ll get back to you soon!' },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: 'Failed to process your message. Please try again.' },
      { status: 500 },
    );
  }
}
