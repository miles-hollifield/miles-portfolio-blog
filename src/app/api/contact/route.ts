import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_ADDRESS = process.env.RESEND_FROM || 'Portfolio Contact <onboarding@resend.dev>';
const TO_ADDRESS = process.env.CONTACT_TO || 'fieldofmiles@gmail.com';

export async function POST(request: NextRequest) {
  try {
    // Ensure service is configured in the deployed environment
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, organization, reason, message } = body;

    // Basic validation
    if (!name || !email || !reason || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ''}
      <p><strong>Reason:</strong> ${reason}</p>
      <p><strong>Message:</strong></p>
      <div style="background: #f5f5f5; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
        ${message.replace(/\n/g, '<br>')}
      </div>
      
      <hr style="margin: 2rem 0;">
      <p style="color: #666; font-size: 0.9rem;">
        Sent from your portfolio website contact form
      </p>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [TO_ADDRESS],
      subject: `Portfolio Contact: ${reason}`,
      html: emailContent,
      replyTo: email, // This allows you to reply directly to the sender
    });

    if (error) {
      console.error('Resend send error:', error);
      return NextResponse.json(
        { error: 'Failed to send email via provider' },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
