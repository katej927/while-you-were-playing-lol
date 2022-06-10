import { readFileSync, writeFileSync } from 'fs';
import { IStoredUserType } from 'types';

const getUsers = () => {
  const userBuffer = readFileSync('data/users.json');
  const userString = userBuffer.toString();

  if (!userString) return [];

  const users: IStoredUserType[] = JSON.parse(userString);
  return users;
};

const exist = ({ email }: { email: string }) => {
  const users = getUsers();
  return users.some((user) => user.email === email);
};

const write = async (users: IStoredUserType[]) => {
  writeFileSync('data/users.json', JSON.stringify(users));
};

export default { getUsers, exist, write };
