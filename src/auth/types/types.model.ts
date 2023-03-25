import { InputType, ObjectType } from '@nestjs/graphql';
import { User } from '../../user/user.entity';

@InputType()
export class RegisterInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@InputType()
export class LoginInput {
  email: string;
  password: string;
}

@ObjectType()
export class Tokens {
  accessToken: string;
  refreshToken: string;
}

@ObjectType()
export class AuthResponse {
  user: User;
  accessToken: string;
  refreshToken?: string;
}
