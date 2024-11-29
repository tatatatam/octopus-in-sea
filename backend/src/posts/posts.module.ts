import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './scheme/posts.scheme';
import { CommentsModule } from 'src/comments/comments.module';
import { CommentsService } from 'src/comments/comments.service';
import { CommentSchema } from 'src/comments/scheme/comment.scheme';

@Module({
  controllers: [PostsController],
  providers: [PostsService, CommentsService],
  imports: [
    MongooseModule.forFeature([
      { name: 'Post', schema: PostSchema },
      { name: 'Comment', schema: CommentSchema },
    ]),
    CommentsModule,
  ],
})
export class PostsModule {}
