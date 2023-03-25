import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Question } from './schemas/question.entity';
import { QuestionService } from './question.service';

@Resolver((of) => Question)
export class QuestionResolver {
  constructor(private readonly questionService: QuestionService) {}

  @ResolveField()
  async variants(@Parent() { variants }: Question) {
    return this.questionService.resolveVariants(variants);
  }
}
