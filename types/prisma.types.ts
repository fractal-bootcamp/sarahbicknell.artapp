import type { Post, User } from '@prisma/client'


export interface ArtParams {
    color: string;
    text: string;
}

interface PostWithArtParams extends Omit<Post, 'artParams'> {
    artParams: ArtParams
}

export type PostWithUser = PostWithArtParams & {
    user: {
        username: string;
    }
}
