import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
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
      <Link href="/login">
        <p>Login/Signup</p>
      </Link>
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn> 
  </nav>
);

export default Navbar;
