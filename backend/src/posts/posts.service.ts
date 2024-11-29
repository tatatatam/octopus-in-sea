import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './scheme/posts.scheme';
import { ObjectId } from 'mongodb';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(createPostDto: CreatePostDto) {
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }

  findAll() {
    return this.postModel.find().exec();
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

  remove(id: string): Promise<{ deletedCount?: number }> {
    const removedPost = this.postModel.deleteOne({
      _id: new ObjectId(id),
    });
    return removedPost;
  }
}
