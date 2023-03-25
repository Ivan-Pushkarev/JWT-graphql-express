import { Module } from '@nestjs/common';
import { QuestionGroupResolver } from './question-group.resolver';
import { QuestionGroupService } from './question-group.service';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionGroup, QuestionGroupSchema } from './questionGroup.entity';
import { QuestionModule } from '../question/question.module';

@Module({
  imports: [
    QuestionModule,
    MongooseModule.forFeature([
      { name: QuestionGroup.name, schema: QuestionGroupSchema },
    ]),
  ],
  providers: [QuestionGroupResolver, QuestionGroupService],
})
export class QuestionGroupModule {}
