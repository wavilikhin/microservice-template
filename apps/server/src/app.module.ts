import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostsService } from './posts/posts.service';
import { PrismaService } from './prisma.service';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { UsersController } from './users/users.controller';
import { PostsController } from './posts/posts.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development'],
    }),
    UsersModule,
    PostsModule,
  ],
  controllers: [UsersController, PostsController],
  providers: [PrismaService, UsersService, PostsService],
})
export class AppModule {}
