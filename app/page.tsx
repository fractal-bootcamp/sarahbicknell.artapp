"use client"
import { useState, useEffect } from "react";
import ArtPost from "@/components/ArtPost";
import { getPosts } from "@/lib/getPosts";


export default function ArtFeed() {
  const [posts, setPosts] = useState<PrismaPostWithUser[]>([]);
  const [loading, setLoading] = useState(true);

  //gets posts from database on mount
  useEffect(() => {
    async function callGetPosts() { 
      try{
        const posts = await getPosts();
        setPosts(posts);
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
      {loading? <div> Loading posts... </div> :
      <div> 
        {posts.map((post) => (
          <ArtPost key={post.id} {...post} />
        ))}
      </div>
      }
    </div>
  );
}
