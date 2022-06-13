import axios from '.';
import { IUserType } from 'types';

interface SignUpAPIBody {
  email: string;
  password: string;
  summonerName: string;
  name: string;
  birthday: string;
}

export const signupAPI = (body: SignUpAPIBody) => axios.post<IUserType>('/api/auth/signup', body);

export const loginAPI = (body: { email: string; password: string }) => axios.post<IUserType>('/api/auth/login', body);

export const meAPI = () => axios.get<IUserType>('/api/auth/me');

export const logoutAPI = () => axios.delete('/api/auth/logout');

interface ICreateUserProps {
  email: string;
  name: string;
  summonerName: string;
  password: string;
  birthday: string;
}

export const createUser = async (body: ICreateUserProps): Promise<any> => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) throw new Error(data.message || 'Something went wrong!');

  return data;
};
