import { Profile, Strategy } from 'passport-facebook';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/user.service';
import { UserDocument } from '../../user/user.schema';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: `${process.env.SERVER_URL}/auth/facebook/redirect`,
      scope: 'email',
      profileFields: ['id', 'displayName', 'email', 'name', 'picture'],
    });
  }
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    // done: (err: any, user: any, info?: any) => void,
  ): Promise<UserDocument | unknown> {
    const facebookId = profile._json.id as string;
    let user = await this.userService.findById(facebookId, 'facebookId');
    if (!user) {
      user = await this.userService.create({
        facebookId: profile._json.id,
        firstName: profile._json.first_name,
        lastName: profile._json.last_name,
        email: profile._json.email,
        avatar: profile._json.picture.data.url,
        emailConfirmed: true,
      });
    }
    return user;
  }
}
