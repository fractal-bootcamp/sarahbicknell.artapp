import { NextRequest, NextResponse } from 'next/server';
import client from '@/client';
import { getAuth } from '@clerk/nextjs/server';
import { useUser } from '@clerk/nextjs';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Raw request body:', body);

    const { color, text } = body;
    console.log('Parsed payload:', { color, text });

    if (!color || !text) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    // Transform the payload to match the Prisma model
    const artParams = { color, text };
    const clerkId = useUser().user?.id;
    const user = await client.user.findUnique({
      where: { clerkId },
    });
    const userId = user?.id;
    if (!userId) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    const post = await client.post.create({
      data: {
        artParams,
        userId,
      },
    });
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'Error creating post' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
