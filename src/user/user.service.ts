import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async findAll() {
    return this.userModel.find();
  }
  async findById(
    id: string,
    fieldName: string,
  ): Promise<UserDocument | unknown> {
    return this.userModel.find({ [fieldName]: id });
  }
  async create(args: User): Promise<UserDocument> {
    return this.userModel.create(args);
  }
}
