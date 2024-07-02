"use client"
import { useState } from "react";


//OOPS, this page is actually supposed to just display all the art pieces , i started building the art builder here
//replace later with a feed of art pieces
export default function ArtFeed() {
  const [color, setColor] = useState("#3b82f6");

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="pb-1">My Art Feed</div>
      <div> 
        <div style={{backgroundColor: color}} className=" text-white w-[200px] h-[200px]"> (•‿•) </div>
      </div>
      <div>
        <input type="color" value={color} onChange={(event) => setColor(event.target.value)}/>
      </div>
    </div>
  );
}
