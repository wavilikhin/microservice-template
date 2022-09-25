import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { GetPostsDto } from './dto/get-posts.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get('/:id')
  async getPost(@Param('id') id: string) {
    return this.postsService.getPost({ id: parseInt(id) });
  }

  @Get()
  async getPosts(@Body() getPostsDto: GetPostsDto) {
    return this.postsService.getPosts(getPostsDto);
  }

  @Post()
  async createPost(@Body() cratePostDto: Prisma.PostCreateInput) {
    return this.postsService.createPost(cratePostDto);
  }

  @Patch('/:id')
  async updatePost(
    @Param('id') id: string,
    @Body() updatePostDto: Prisma.PostUpdateInput,
  ) {
    return this.postsService.updatePost({ id: parseInt(id) }, updatePostDto);
  }

  @Delete('/:id')
  async deletePost(@Param('id') id: string) {
    return this.postsService.deletePost({ id: parseInt(id) });
  }
}
