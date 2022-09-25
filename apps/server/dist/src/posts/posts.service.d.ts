import { Post, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    getPost(postWhereUniqueInput: Prisma.PostWhereUniqueInput): Promise<Post | null>;
    getPosts(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.PostWhereUniqueInput;
        where?: Prisma.PostWhereInput;
        orderBy?: Prisma.PostOrderByWithRelationInput;
    }): Promise<Post[]>;
    createPost(data: Prisma.PostCreateInput): Promise<Post>;
    updatePost(where: Prisma.PostWhereUniqueInput, data: Prisma.PostUpdateInput): Promise<Post>;
    deletePost(where: Prisma.PostWhereUniqueInput): Promise<Post>;
}
