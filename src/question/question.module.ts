import { Module } from '@nestjs/common';
import { QuestionResolver } from './question.resolver';
import { QuestionService } from './question.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Question, QuestionSchema } from './schemas/question.entity';
import { Variant, VariantSchema } from './schemas/variant.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Question.name, schema: QuestionSchema },
      { name: Variant.name, schema: VariantSchema },
    ]),
  ],
  providers: [QuestionResolver, QuestionService],
  exports: [QuestionService],
})
export class QuestionModule {}
