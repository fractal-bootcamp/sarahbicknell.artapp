interface ArtPostProps {
    artParams: {
      color: string;
      text: string;
    };
    createdAt: string;
    userId: number;
  }
  
  export default function ArtPost({ artParams, createdAt, userId }: ArtPostProps) {
    return (
      <div className="border p-4 mb-4">
        <div 
          style={{backgroundColor: artParams.color}} 
          className="mb-2"
        ></div>
        <p>Color: {artParams.color}</p>
        <p>Created at: {new Date(createdAt).toLocaleString()}</p>
        <p>By user: {userId}</p>
      </div>
    );
  }