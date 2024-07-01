import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "../components/Navbar"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider frontendApi="pk_test_c3BlY2lhbC1jaGlnZ2VyLTIwLmNsZXJrLmFjY291bnRzLmRldiQ">
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
