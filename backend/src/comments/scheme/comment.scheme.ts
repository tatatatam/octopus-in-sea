import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop()
  postId: string;

  @Prop()
  authorId: string;

  @Prop()
  detail: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
