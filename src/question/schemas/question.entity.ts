import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Variant } from './variant.entity';
import { Name, NameSchema } from '../../shared/types/name.entity';

enum answerTypeEnum {
  TEXT = 'text',
  SINGLE = 'single',
  MULTI = 'multi',
}
export type QuestionDocument = HydratedDocument<Question>;

@ObjectType()
@Schema({ timestamps: true })
export class Question {
  @Field(() => ID)
  _id?: mongoose.Schema.Types.ObjectId;

  @Field(() => Name, { nullable: true })
  @Prop({ type: NameSchema })
  name: Name;

  @Field(() => Name, { nullable: true })
  @Prop({ type: NameSchema })
  description?: Name;

  @Prop([
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Variant',
    },
  ])
  variants: Variant[];

  @Field(() => String, { nullable: true })
  @Prop({ required: true, enum: answerTypeEnum })
  answerType?: answerTypeEnum;

  @Prop({ required: true, type: Number, default: 1 })
  reward?: number;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
