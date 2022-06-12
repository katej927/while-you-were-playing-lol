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

const find = ({ email, id }: { email?: string; id?: number }) => {
  const users = getUsers();
  return users.find((user) => user.email === email || user.id === id);
};

export default { getUsers, exist, write, find };
