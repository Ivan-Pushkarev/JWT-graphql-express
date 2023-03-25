import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.entity';
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
    return this.userModel.findOne({ [fieldName]: id });
  }
  async create(args: User): Promise<UserDocument> {
    console.log('args', args);
    return this.userModel.create(args);
  }
}
