import { currentUser, auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import client from "@/client";

export async function GET(request: NextRequest) {
  console.log("Sign-up callback triggered");

  const { userId } = auth();

  if (!userId) {
    console.log("No userId found");
    return NextResponse.redirect(new URL('/login', request.url));
  }

  console.log("UserId:", userId);

  try {
    const user = await client.user.findUnique({
      where: {
        clerkId: userId
      }
    });

    if (!user) {
      console.log("User not found in database, creating new user");
      const curr = await currentUser();
      
      const newUser = await client.user.create({
        data: {
          clerkId: userId,
          email: curr?.emailAddresses[0].emailAddress || "",
          name: curr?.username || ""
        }
      });

      console.log("New user created:", newUser);
    } else {
      console.log("User already exists in database");
    }

    return NextResponse.redirect(new URL('/', request.url));
  } catch (error) {
    console.error("Error in sign-up callback:", error);
    // handle the error
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}