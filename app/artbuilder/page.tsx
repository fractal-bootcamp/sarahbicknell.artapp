"use client"
import { useState } from "react";
import { useUser } from "@clerk/nextjs";


export default function ArtBuilderPage() {
  const [artParams, setArtParams] = useState({
    color: "#3b82f6",
    text: "(•‿•)"
  });
  const {user} = useUser()

  async function handleSave() {
    if (!user) return 

    try{
      const response = await fetch("/api/posts/create", {
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
      <div className="pb-1">
        My Art Maker
      </div>
      <div> 
        <div style={{backgroundColor: artParams.color}} className=" text-white w-[200px] h-[200px]"> {artParams.text} </div>
      </div>
      <div>
        <input type="color" value={artParams.color} onChange={(event) => setArtParams({...artParams, color: event.target.value})}/>
      </div>
      <div> 
        <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}
