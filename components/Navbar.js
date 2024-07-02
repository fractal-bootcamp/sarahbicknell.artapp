import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const Navbar = () => (
  <nav>
    <Link href="/">
      <p>Home</p>
    </Link>
    <Link href="/artbuilder">
        <p>Build Art</p>
      </Link>
    <SignedOut>
      <SignInButton 
        forceRedirectUrl="/api/userDbCheckCallback" 
        signUpForceRedirectUrl="/api/userDbCheckCallback" />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn> 
  </nav>
);

export default Navbar;
