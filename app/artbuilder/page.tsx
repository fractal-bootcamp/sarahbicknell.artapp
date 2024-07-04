"use client"
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function ArtBuilderPage() {
  const [artParams, setArtParams] = useState({
    color: "#3b82f6",
    text: "(•‿•)"
  });
  const {user} = useUser()
  const router = useRouter();

  async function handleSave() {
    if (!user) return 

    try{
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          artParams: artParams
        })
      });

      if (response.ok) {
        console.log("Art saved successfully");
        router.push("/");
      } else {
        const errorText = await response.text();
        console.error("Error saving art:", response.status, errorText);
      }
    } catch (error) {
      console.error("Error saving art:", error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center font-mono">
      <div className="pb-4 text-2xl">
        My Art Maker
      </div>
      <div className="pb-4"> 
        <div style={{backgroundColor: artParams.color}} className=" text-white w-[200px] h-[200px]"> {artParams.text} </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 pb-4">
        <label>
          Choose color:&nbsp;
          <input type="color" value={artParams.color} onChange={(event) => setArtParams({...artParams, color: event.target.value})} style={{ width: "100px" }}/>
        </label>
        <label>
          Choose text:&nbsp;
          <input type="text" value={artParams.text} onChange={(event) => setArtParams({...artParams, text: event.target.value})} className="border rounded, w-[100px]" />
        </label>
      </div>
      <div> 
        <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}
