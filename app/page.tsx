"use client"
import { useState, useEffect } from "react";
import ArtPost from "@/components/ArtPost";
import { getPosts } from "@/lib/getPosts";
import { PostWithUser } from "@/types/prisma.types";


export default function ArtFeed() {
  const [posts, setPosts] = useState<PostWithUser[]>([]);
  const [loading, setLoading] = useState(true);

  //gets posts from database on mount
  useEffect(() => {
    async function callGetPosts() {
      try {
        const posts = await getPosts();
        setPosts(posts);
        console.log(posts)
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false)
      }
    }
    callGetPosts()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      {loading ? <div> Loading posts... </div> :
        <div>
          {posts.map((post) => (
            post.artParams ? (
              <ArtPost key={post.id} {...post} />
            ) : (
              <div key={post.id}>Invalid art parameters</div>
            )
          ))}
        </div>
      }
    </div>
  );
}
