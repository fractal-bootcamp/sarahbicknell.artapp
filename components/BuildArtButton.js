import Link from 'next/link';

const BuildArtButton = () => (
  <div className="fixed bottom-4 right-4">
    <Link href="/artbuilder">
      <button className="p-2 bg-blue-500 text-white rounded">Build Art</button>
    </Link>
  </div>
);

export default BuildArtButton;