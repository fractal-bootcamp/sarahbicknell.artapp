import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 font-mono fixed top-0 left-0 right-0 bg-white shadow-md z-10">
    <Link href="/">
      <p>Feed</p>
    </Link>
    <h1 className="text-2xl font-bold">Art Builder</h1>
    <SignedOut>
      <SignInButton 
        forceRedirectUrl="/api/userDbCheckCallback" 
        signUpForceRedirectUrl="/api/userDbCheckCallback">
          <button>Sign In</button>
      </SignInButton>
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn> 
  </nav>
);

export default Navbar;
