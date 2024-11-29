import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './scheme/comment.scheme';

@Injectable()
export class CommentsService {
  constructor(@InjectModel(Comment.name) private readonly commentModel) {}
  create(createCommentDto: CreateCommentDto) {
    const createdComment = new this.commentModel(createCommentDto);
    return createdComment.save();
  }

  findByPostId(postId: string) {
    return this.commentModel.find({ postId }).exec();
  }

  removeByAuthorId(authorId: string) {
    return this.commentModel.deleteMany({ authorId: authorId });
  }
}
