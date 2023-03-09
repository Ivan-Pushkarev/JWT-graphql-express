import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../user/user.schema';
import { TokenService } from './token.service';
import { LoginInput, RegisterInput } from '../../graphql';
import * as bcrypt from 'bcrypt';
import { Token, TokenDocument } from '../schemas/token.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Token.name) private tokenModel: Model<TokenDocument>,
    private readonly tokenService: TokenService,
  ) {}

  async register({
    email,
    password,
    firstName,
    lastName,
  }: RegisterInput): Promise<any> {
    const foundedUser = await this.userModel.findOne({ email });
    if (foundedUser) {
      throw new BadRequestException('User with email ${email} already exists');
    }
    const hashPassword = await bcrypt.hash(password, 10);
    // const activationLink = uuid.v4(); // v34fa-asfasf-142saf-sa-asf
    const user = await this.userModel.create({
      email,
      firstName,
      lastName,
      password: hashPassword,
    });
    // await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);
    const tokens = this.tokenService.generateTokens(user);
    await this.tokenService.saveToken(user._id, tokens.refreshToken);
    return { ...tokens, user };
  }

  async login({ email, password }: LoginInput): Promise<any> {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new BadRequestException(`User with email ${email} not found`);
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw new BadRequestException('Wrong password');
    }
    const tokens = this.tokenService.generateTokens(user);
    await this.tokenService.saveToken(user._id, tokens.refreshToken);
    return { ...tokens, user };
  }

  async logout(refreshToken: string) {
    return await this.tokenService.removeToken(refreshToken);
  }

  async getNewTokens(refreshToken: string) {
    if (!refreshToken) {
      throw new BadRequestException('Unauthorized Error');
    }
    const userData = this.tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await this.tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDb) {
      throw new BadRequestException('Unauthorized Error');
    }
    //добавлять в новые токены актуальную информацию о пользователе
    const user = await this.userModel.findById(userData._id);
    const tokens = this.tokenService.generateTokens(user);
    await this.tokenService.saveToken(user._id, tokens.refreshToken);
    return tokens;
  }
  setRTInCookies(res, refreshToken: string) {
    res.cookie('refreshToken', refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
  }
}
