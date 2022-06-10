import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import addDays from 'date-fns/addDays';

import Data from 'lib/data';
import { StoredUserType } from 'types';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, firstname, lastname, password, birthday } = req.body;

    if (!email || !firstname || !lastname || !password || !birthday) {
      res.statusCode = 400;
      return res.send('필수 데이터가 없습니다.');
    }

    const userExist = Data.user.exist({ email });
    if (userExist) {
      res.statusCode = 409;
      return res.send('이미 가입된 이메일입니다.');
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    const users = Data.user.getUsers();
    const userId = users.length ? users[users.length - 1].id + 1 : 1;
    const newUser: StoredUserType = {
      id: userId,
      email,
      firstname,
      lastname,
      password: hashedPassword,
      birthday,
      profileImage: '/public/static/image/default_user_profile_image.jpg',
    };
    Data.user.write([...users, newUser]);

    await new Promise((resolve) => {
      const token = jwt.sign(String(newUser.id), process.env.JWT_SECRET!);
      res.setHeader(
        'Set-Cookie',
        `access_token=${token}; path=/; expires=${addDays(new Date(), 3).toUTCString()}; httponly`
      );
      resolve(token);
    });

    return res.end();
  }
  res.statusCode = 405;
  return res.end();
};
