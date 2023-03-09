import { User } from "../../user/user.schema";

export class RegisterInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
export class LoginInput {
  email: string;
  password: string;
}
export interface TokenPayload {
  _doc: {
    _id: string;
  };
}
