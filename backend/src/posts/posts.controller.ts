import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Request,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Request() req, @Body() createPostDto: CreatePostDto) {
    return this.postsService.create({
      ...createPostDto,
      authorId: req.user.userId,
    });
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get('/me')
  @UseGuards(JwtAuthGuard)
  findAllById(@Request() req) {
    return this.postsService.findAllById(req.user.userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.indPostBySlug(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }
}
