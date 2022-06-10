import { IUserType } from '.';

export type UserState = IUserType & {
  isLogged: boolean;
};
