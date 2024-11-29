import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  authorId: string;

  @Prop()
  detail: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
