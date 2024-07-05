import { PostWithUser } from "@/types/prisma.types";

  export default function ArtPost({user, artParams, createdAt}: PostWithUser) {
    return (
      <div className="border rounded-lg p-4 mb-4 shadow-lg">
        <p>{user.username}</p>
      <div> 
        <div style={{backgroundColor: artParams.color}} className=" text-white w-[300px] h-[300px]"> {artParams.text} </div>
      </div>
        <p>
          {(() => {
            const hoursAgo = Math.floor((Date.now() - new Date(createdAt).getTime()) / (1000 * 60 * 60));
            return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
          })()}
        </p>
      </div>
    );
  }