import client from '@/client'
import { clerkClient } from '@clerk/nextjs/server'

export async function createOrFetchUser(clerkUserId: string) {
  let user = await client.user.findUnique({
    where: { clerkId: clerkUserId }
  })

  if (!user) {
    const clerkUser = await clerkClient.users.getUser(clerkUserId)
    user = await client.user.create({
      data: {
        clerkId: clerkUserId,
        email: clerkUser.emailAddresses[0]?.emailAddress || "",
        username: clerkUser.username || ""
      }
    })
  }

  return user
}