import axios from '.';

interface SignUpAPIBody {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  birthday: string;
}

export const signupAPI = (body: SignUpAPIBody) => axios.post('/api/auth/signup', body);
