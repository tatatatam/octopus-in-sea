import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './scheme/posts.scheme';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }])],
})
export class PostsModule {}
