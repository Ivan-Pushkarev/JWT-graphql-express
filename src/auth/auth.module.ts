import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../user/user.schema';
import { Token, TokenSchema } from './schemas/token.schema';
import { TokenService } from './services/token.service';
import { JwtStrategy } from './passportStartegies/jwt.strategy';
import { UserService } from '../user/user.service';
import { AuthService } from './services/auth.service';
import { JwtService } from '@nestjs/jwt';
import { SocialAuthController } from './social.auth.controller';
import { FacebookStrategy } from './passportStartegies/facebook.strategy';
import { GoogleStrategy } from './passportStartegies/google.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Token.name, schema: TokenSchema },
    ]),
  ],
  providers: [
    JwtService,
    AuthResolver,
    AuthService,
    UserService,
    TokenService,
    JwtStrategy,
    FacebookStrategy,
    GoogleStrategy,
  ],
  controllers: [SocialAuthController],
})
export class AuthModule {}
