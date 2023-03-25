import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from '../user/user.entity';
import { Field, ID } from '@nestjs/graphql';
import { Question } from '../question/schemas/question.entity';
import { AnswerGroup } from '../answer-group/answerGroup.entity';

export type AnswerDocument = HydratedDocument<Answer>;

@Schema({ timestamps: true })
export class Answer {
  @Field(() => ID)
  _id?: mongoose.Schema.Types.ObjectId;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true,
  })
  question: Question;

  // @Prop(
  //   raw([
  //     {
  //       name: { type: mongoose.Schema.Types.Mixed },
  //       correct: { type: Boolean, required: true },
  //     },
  //   ]),
  // )
  // variants: Variant[];

  @Prop({ type: String, required: true, default: '' })
  answerType: string;

  @Prop({ type: Number, default: 1 })
  reward: number;

  @Prop({ type: String, default: '' })
  note?: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AnswerGroup',
    required: true,
  })
  answerGroup: AnswerGroup;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  owner: User;
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);
