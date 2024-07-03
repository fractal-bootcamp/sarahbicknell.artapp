import { NextRequest, NextResponse } from 'next/server';
import client from '@/client';
import { getAuth } from '@clerk/nextjs/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Raw request body:', body);

    if (!body.artParams || !body.artParams.color || !body.artParams.text) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    console.log('Parsed payload:',  body);

    // Get the authenticated user's Clerk ID
    const { userId: clerkId } = getAuth(req);
    if (!clerkId) {
      return NextResponse.json({ error: 'User not authenticated' }, { status: 401 });
    }

    // Find the user in the database using the Clerk ID
    const user = await client.user.findUnique({
      where: { clerkId },
    });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Ensure client and client.post are defined
    if (!client || !client.post) {
      throw new Error("Database client or post model is not defined");
    }

    const newPost = await client.post.create({
      data: {
        artParams: body.artParams,
        userId: user.id, 
      },
    });

    return NextResponse.json({ success: true, post: newPost });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'Error creating post' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
