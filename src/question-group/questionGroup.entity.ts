import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Question } from '../question/schemas/question.entity';
import { Name, NameSchema } from '../shared/types/name.entity';

export type QuestionGroupDocument = HydratedDocument<QuestionGroup>;

@ObjectType()
@Schema({ timestamps: true })
export class QuestionGroup {
  @Field(() => ID)
  _id?: mongoose.Schema.Types.ObjectId;

  @Field(() => Name)
  @Prop({ type: NameSchema })
  name: Name;

  @Field(() => Name)
  @Prop({ type: NameSchema })
  description?: Name;

  @Prop([
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
    },
  ])
  questions: Question[];

  @Field(() => Int)
  @Prop({ type: Number, required: true, default: 1 })
  acceptableMistakes: number;

  @Prop({ type: Boolean, default: false })
  active: boolean;

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  // owner: User;
}

export const QuestionGroupSchema = SchemaFactory.createForClass(QuestionGroup);
