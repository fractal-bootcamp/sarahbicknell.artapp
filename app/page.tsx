"use client"
import { useState, useEffect } from "react";
import ArtPost from "@/components/ArtPost";
import { getPosts } from "@/lib/getPosts";


export default function ArtFeed() {
  const [posts, setPosts] = useState<any[]>([]);

  //gets posts from database on mount
  useEffect(() => {
    getPosts().then(setPosts).catch(console.error)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="pb-1">My Art Feed</div>
      <div> 
        {posts.map((post) => (
          <ArtPost key={post.id} {...post} username={post.user.name} />
        ))}
      </div>
    </div>
  );
}
