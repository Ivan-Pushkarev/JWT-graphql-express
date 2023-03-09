import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password?: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

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
