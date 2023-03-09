import { Context, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserDocument } from './user.schema';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query('getUsers')
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<UserDocument[]> {
    return this.userService.findAll();
  }

  @Query('currentUser')
  @UseGuards(JwtAuthGuard)
  currentUser(@Context() context): Promise<UserDocument | unknown> {
    return context.req.user;
  }
}
