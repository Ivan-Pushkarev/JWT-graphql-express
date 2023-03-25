import { Controller, Get, Redirect, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { Response } from 'express';

@Controller('auth')
export class SocialAuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
  ) {}
  @Get('facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookLogin(): Promise<any> {
    return { msg: 'Facebook Authentication' };
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleLogin(): Promise<any> {
    return { msg: 'Google Authentication' };
  }

  @Get('facebook/redirect')
  @UseGuards(AuthGuard('facebook'))
  async facebookLoginRedirect(
    @Req() req: any,
    @Res() res: Response,
  ): Promise<any> {
    const { accessToken, refreshToken } = this.tokenService.generateTokens(
      req.user,
    );
    await this.tokenService.saveToken(req.user._id, refreshToken);
    this.authService.setRTInCookies(res, refreshToken);
    res.redirect(
      `${process.env.CLIENT_URL}/successSocialLogin?accessToken=${accessToken}`,
    );
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleLoginRedirect(
    @Req() req: any,
    @Res() res: Response,
  ): Promise<any> {
    const { accessToken, refreshToken } = this.tokenService.generateTokens(
      req.user,
    );
    await this.tokenService.saveToken(req.user._id, refreshToken);
    this.authService.setRTInCookies(res, refreshToken);
    res.redirect(
      `${process.env.CLIENT_URL}/successSocialLogin?accessToken=${accessToken}`,
    );
  }
}
