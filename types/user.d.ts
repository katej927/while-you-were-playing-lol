export interface IUserType {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  birthday: string;
  profileImage: string;
}

export interface StoredUserType extends IUserType {
  password: string;
}
