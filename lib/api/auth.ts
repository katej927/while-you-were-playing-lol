import axios from '.';
import { IUserType } from 'types';

interface SignUpAPIBody {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  birthday: string;
}

export const signupAPI = (body: SignUpAPIBody) => axios.post<IUserType>('/api/auth/signup', body);
