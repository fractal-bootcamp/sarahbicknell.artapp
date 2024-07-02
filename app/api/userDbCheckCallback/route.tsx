import { currentUser, auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import client from "@/client";
import { redirect } from "next/navigation";

//on sign in/up, checks if clerkauthed user is in the DB, if not adds to db, then redriecteds to home page 

export async function GET(request: NextRequest) {
  console.log("Sign-up callback triggered");

  //this is wtithin the clerk context
  const clerkUserId = auth().userId
  
  //check if there is a user with this Id in clerk, redirect
  if (!clerkUserId) {
    console.log("No userId found");
    return NextResponse.redirect(new URL('/login', request.url));
  }
  console.log("UserId:", clerkUserId);

  try {
    const user = await client.user.findUnique({
      where: {
        clerkId: clerkUserId
      }
    });

    if (!user) {
      console.log("User not found in database, creating new user");
      const curr = await currentUser();
      
      if (!curr) {
        console.error("Current user data not found");
        return NextResponse.json({ error: "Current user data not found" }, { status: 500 });
      }

      const newUser = await client.user.create({
        data: {
          clerkId: clerkUserId,
          email: curr.emailAddresses[0]?.emailAddress || "",
          username: curr.username || ""
        }
      });

      console.log("New user created:", newUser);
    } else {
      console.log("User already exists in database");
    }

    return NextResponse.redirect(new URL('/', request.url));
  } catch (error) {
    console.error("Error in sign-up callback:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}