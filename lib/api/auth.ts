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

export const loginAPI = (body: { email: string; password: string }) => axios.post<IUserType>('/api/auth/login', body);

export const meAPI = () => axios.get<IUserType>('/api/auth/me');

export const logoutAPI = () => axios.delete('/api/auth/logout');
