import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Token, TokenDocument } from '../schemas/token.schema';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from '../../user/user.schema';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel(Token.name) private tokenModel: Model<TokenDocument>,
    private jwtService: JwtService,
  ) {}
  generateTokens({ _id, firstName, lastName, email, avatar }: UserDocument) {
    const payload = {
      _id,
      firstName,
      lastName,
      email,
      avatar,
    };
    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_ACCESS_SECRET,
      expiresIn: '5m',
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: '30d',
    });
    return {
      accessToken,
      refreshToken,
    };
  }
  validateRefreshToken(token) {
    try {
      return this.jwtService.verify(token, {
        secret: process.env.JWT_REFRESH_SECRET,
      });
    } catch {
      return null;
    }
  }
  async saveToken(userId, refreshToken) {
    const tokenData = await this.tokenModel.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    return this.tokenModel.create({ user: userId, refreshToken });
  }

  async removeToken(refreshToken) {
    return this.tokenModel.deleteOne({ refreshToken });
  }
  async findToken(refreshToken) {
    return this.tokenModel.findOne({ refreshToken });
  }
  // setTokensInCookies(res: Response, userData) {
  //   res.cookie('refreshToken', userData.refreshToken, {
  //     maxAge: 30 * 24 * 60 * 60 * 1000,
  //     httpOnly: true,
  //   });
  //   // res.cookie('accessToken', userData.accessToken, { maxAge: 10 * 60 * 1000, httpOnly: true });
  // }
}
