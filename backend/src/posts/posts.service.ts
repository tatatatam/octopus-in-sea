import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './scheme/posts.scheme';

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

  update(id: number, updatePostDto: UpdatePostDto) {
    const updatedPost = this.postModel.findByIdAndUpdate(id, updatePostDto, {
      new: true,
    });
    return updatedPost;
  }

  remove(id: number) {
    const removedPost = this.postModel.findByIdAndDelete(id);
    return removedPost;
  }
}
