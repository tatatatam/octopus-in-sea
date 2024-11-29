import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './scheme/posts.scheme';
import { CommentsService } from 'src/comments/comments.service';
import { ObjectId } from 'mongodb';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<Post>,
    private commentService: CommentsService,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }

  findAll() {
    return this.postModel.find().exec();
  }

  findAllById(authorId: string) {
    return this.postModel
      .find({
        authorId,
      })
      .exec();
  }

  findOne(id: number) {
    return this.postModel.findById(id).exec();
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    const updatedPost = this.postModel.findByIdAndUpdate(
      new ObjectId(id),
      updatePostDto,
      {
        new: true,
      },
    );
    return updatedPost;
  }

  async indPostBySlug(id: string) {
    const postModel = await this.postModel.findById(id).exec();
    const comments = await this.commentService.findByPostId(id);

    return { ...postModel.toObject(), comments };
  }
}
