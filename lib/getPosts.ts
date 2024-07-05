import { PostWithUser } from "@/types/prisma.types";

export async function getPosts(): Promise<PostWithUser[]> {
    const response = await fetch('/api/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return response.json();
  }