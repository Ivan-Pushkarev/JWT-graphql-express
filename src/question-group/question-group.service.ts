import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { QuestionGroup, QuestionGroupDocument } from './questionGroup.entity';
import { QuestionService } from '../question/question.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class QuestionGroupService {
  constructor(
    @InjectModel(QuestionGroup.name)
    private questionGroupModel: Model<QuestionGroupDocument>,
    private readonly questionService: QuestionService,
  ) {}

  async createDB() {
    const folderPath = './quizzes';
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        console.log('Error reading folder:', err);
        return;
      }
      // Loop through all files in the folder
      for (const file of files) {
        // Construct the full file path
        const filePath = `${folderPath}/${file}`;
        // Read the file contents
        console.log('new file reading');
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
            console.log('Error reading file:', err);
            return;
          }
          // Parse the JSON data into a JavaScript object
          try {
            const questionGroupData = JSON.parse(data);
            this.createQuestionGroup(questionGroupData);
          } catch (e) {
            console.log('Error parsing JSON:', e);
          }
        });
      }
      return 'create Date Base';
    });
  }

  async createQuestionGroup({
    questions,
    name,
    acceptableMistakes,
    active,
  }: QuestionGroup) {
    const questionIds = await Promise.all(
      questions.map(async (el) => {
        return this.questionService.createQuestion(el);
      }),
    );
    this.questionGroupModel
      .create({ name, acceptableMistakes, active, questions: questionIds })
      .then(() => console.log('question group created'));
  }

  async getAll() {
    return this.questionGroupModel.find();
  }

  async getById(questionGroupId) {
    return this.questionGroupModel.findById(questionGroupId);
  }

  async resolveQuestions(questionIds) {
    return this.questionService.getByQuestionGroup(questionIds);
  }
}
