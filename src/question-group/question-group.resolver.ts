import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { QuestionGroupService } from './question-group.service';
import { QuestionGroup } from './questionGroup.entity';

@Resolver((of) => QuestionGroup)
export class QuestionGroupResolver {
  constructor(private readonly questionGroupService: QuestionGroupService) {}

  @ResolveField()
  async questions(@Parent() { questions }: QuestionGroup) {
    return this.questionGroupService.resolveQuestions(questions);
  }

  @Query(() => String)
  createDB() {
    return this.questionGroupService.createDB();
  }

  @Query(() => [QuestionGroup])
  getAllQuestionGroups() {
    return this.questionGroupService.getAll();
  }

  @Query(() => QuestionGroup)
  getQuestionGroupById(@Args('questionGroupId') questionGroupId: string) {
    return this.questionGroupService.getById(questionGroupId);
  }
}
