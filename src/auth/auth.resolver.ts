import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './services/auth.service';
import { RegisterInput } from './types/types.model';
import { AuthResponse, LoginInput, Tokens } from './types/types.model';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResponse)
  async register(
    @Args('input') input: RegisterInput,
    @Context() ctx,
  ): Promise<AuthResponse> {
    const userData = await this.authService.register(input);
    this.authService.setRTInCookies(ctx.res, userData.refreshToken);
    return userData;
  }

  @Mutation(() => AuthResponse)
  async login(
    @Args('input') input: LoginInput,
    @Context() ctx,
  ): Promise<AuthResponse> {
    const userData = await this.authService.login(input);
    this.authService.setRTInCookies(ctx.res, userData.refreshToken);
    return userData;
  }

  @Mutation(() => String)
  async logout(@Context() ctx): Promise<string> {
    const { refreshToken } = ctx.req.cookies;
    await this.authService.logout(refreshToken);
    ctx.res.clearCookie('refreshToken');
    ctx.res.clearCookie('accessToken');
    return 'User logout';
  }

  @Mutation(() => Tokens)
  async refreshTokens(@Context() ctx): Promise<Tokens> {
    const { refreshToken } = ctx.req.cookies;
    const newTokens = await this.authService.getNewTokens(refreshToken);
    this.authService.setRTInCookies(ctx.res, newTokens.refreshToken);
    return newTokens;
  }
}
