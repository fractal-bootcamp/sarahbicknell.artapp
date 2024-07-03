import client from "@/client";

export async function getPosts() {
  try {
    const posts = await client.post.findMany({
      orderBy: { createdAt: 'desc' },
      include: { user: true }, // Include user information if needed
    });
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}