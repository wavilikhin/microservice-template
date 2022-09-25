import { Prisma } from '@prisma/client';
import { GetPostsDto } from './dto/get-posts.dto';
import { PostsService } from './posts.service';
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    getPost(id: string): Promise<import(".prisma/client").Post>;
    getPosts(getPostsDto: GetPostsDto): Promise<import(".prisma/client").Post[]>;
    createPost(cratePostDto: Prisma.PostCreateInput): Promise<import(".prisma/client").Post>;
    updatePost(id: string, updatePostDto: Prisma.PostUpdateInput): Promise<import(".prisma/client").Post>;
    deletePost(id: string): Promise<import(".prisma/client").Post>;
}
