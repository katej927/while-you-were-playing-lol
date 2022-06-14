interface ICreateUserProps {
  email: string;
  name: string;
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
