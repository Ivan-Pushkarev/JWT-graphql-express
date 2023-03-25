import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from './schemas/question.entity';
import { Variant, VariantDocument } from './schemas/variant.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<QuestionDocument>,
    @InjectModel(Variant.name) private variantModel: Model<VariantDocument>,
  ) {}

  async createQuestion({ name, description, answerType, variants }: Question) {
    const variantIds = await Promise.all(
      variants.map(async (el) => {
        return this.createVariant(el);
      }),
    );
    const createdQuestion = await this.questionModel.create({
      name,
      description,
      answerType,
      variants: variantIds,
    });
    return createdQuestion._id;
  }

  async createVariant(variant: Variant) {
    const createdVariant = await this.variantModel.create({
      name: variant.name,
      correct: variant.correct,
    });
    return createdVariant._id;
  }

  async getByQuestionGroup(questionIds) {
    return this.questionModel.find({ _id: { $in: questionIds } });
  }

  async resolveVariants(variantIds) {
    return this.variantModel.find({ _id: { $in: variantIds } });
  }
}
