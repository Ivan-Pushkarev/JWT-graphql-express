import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from '../user/user.entity';
import { Field, ID } from '@nestjs/graphql';
import { QuestionGroup } from '../question-group/questionGroup.entity';
import { Answer } from '../answer/answer.entity';

export type AnswerGroupDocument = HydratedDocument<AnswerGroup>;

enum statusEnum {
  STARTED = 'started',
  PROGRESS = 'progress',
  DONE = 'done',
  FAIL = 'fail',
}

@Schema({ timestamps: true })
export class AnswerGroup {
  @Field(() => ID)
  _id?: mongoose.Schema.Types.ObjectId;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QuestionGroup',
    required: true,
  })
  questionGroup: QuestionGroup;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  owner: User;

  @Prop([
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Answer',
    },
  ])
  answers: Answer[];

  @Prop({ type: Number, default: 0 })
  rewardsTotal: number;

  @Prop({ type: Number, default: 0 })
  rewardsMax: number;

  @Prop({ type: Boolean, default: false })
  done: boolean;

  @Prop({ required: true, enum: statusEnum })
  status: statusEnum;
}

export const AnswerGroupSchema = SchemaFactory.createForClass(AnswerGroup);
