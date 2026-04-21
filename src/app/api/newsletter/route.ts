import { NextResponse } from 'next/server';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().email(),
});

const subscribers = new Set<string>();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = newsletterSchema.parse(body);

    if (subscribers.has(validatedData.email)) {
      return NextResponse.json(
        { message: 'Already subscribed!' },
        { status: 200 }
      );
    }

    subscribers.add(validatedData.email);

    // In production, you would:
    // 1. Save to database or email service
    // 2. Send confirmation email
    console.log('New newsletter subscription:', validatedData.email);

    return NextResponse.json(
      { success: true, message: 'Subscribed successfully!' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}