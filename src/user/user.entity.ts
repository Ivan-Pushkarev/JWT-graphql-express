import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import mongoose from 'mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';

export type UserDocument = HydratedDocument<User>;

enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

@ObjectType()
@Schema()
export class User {
  @Field(() => ID)
  _id?: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  email: string;

  @Prop({ required: false })
  password?: string;

  @Prop({ required: true })
  firstName?: string;

  @Prop({ required: true })
  lastName?: string;

  @Prop({ type: [String], enum: UserRole, default: [UserRole.USER] })
  roles?: string[];

  @Prop({ required: false, default: false })
  emailConfirmed: boolean;

  @Prop({ required: false })
  avatar?: string;

  @Prop()
  googleId?: string;

  @Prop()
  facebookId?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
