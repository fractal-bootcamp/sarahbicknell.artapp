
import type { PrismaClient } from '@prisma/client'

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient
    }
  }
}

import type { Post, User } from '@prisma/client'

declare global {
  type PrismaPost = Post
  type PrismaUser = User
  type PrismaPostWithUser = PrismaPost & {
    user: {
      username: string;
    }
  }
}
