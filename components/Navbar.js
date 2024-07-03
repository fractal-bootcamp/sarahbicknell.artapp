// components/Navbar.js
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const Navbar = () => (
  <nav>
    <Link href="/">
      <p>Home</p>
    </Link>
    <SignedOut>
      <Link href="/login">
        <p>Login/Signup</p>
      </Link>
    </SignedOut>
    <SignedIn>
      <Link href="/art-builder">
        <p>Build Art</p>
      </Link>
      <UserButton />
    </SignedIn> 
  </nav>
);

export default Navbar;
