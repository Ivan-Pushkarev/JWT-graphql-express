import { Context, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { User } from './user.entity';
import { Roles, RolesGuard } from '../auth/guards/roles.guard';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { nullable: true })
  @UseGuards(JwtAuthGuard)
  currentUser(@Context() context) {
    return context.req.user;
  }
}
