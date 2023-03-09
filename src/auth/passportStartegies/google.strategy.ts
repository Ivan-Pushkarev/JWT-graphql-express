import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { UserService } from '../../user/user.service';
import { UserDocument } from '../../user/user.schema';

interface GoogleProfile extends Profile {
  picture: string;
  email: string;
}
@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.SERVER_URL}/auth/google/callback`,
      scope: ['profile', 'email'],
      prompt: 'select_account',
    });
  }
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: GoogleProfile,
  ): Promise<UserDocument | unknown> {
    const googleId = profile.id;
    let user = await this.userService.findById(googleId, 'googleId');
    if (!user) {
      user = await this.userService.create({
        googleId: profile.id,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.email,
        avatar: profile.picture,
        emailConfirmed: true,
      });
    }
    return user;
  }
}
