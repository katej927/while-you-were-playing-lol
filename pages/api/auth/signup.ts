import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from 'prisma/prisma-client';
import { hashSync } from 'bcryptjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return;

  let prisma = new PrismaClient();

  const data = req.body;

  const isExistedUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
    select: {
      email: true,
      name: true,
    },
  });

  if (isExistedUser) {
    res.status(422).json({ message: 'User Email already exists!', error: true });
    return;
  }

  const result = await prisma.user.create({
    data: { ...data, password: hashSync(data.password, 12) },
  });

  if (result) {
    res.status(201).json({ message: 'Created user!', error: false });
  } else {
    res.status(402).json({ message: 'Prisma error occured', error: true });
  }
}

export default handler;
