import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from 'prisma/prisma-client';
import { compareSync } from 'bcryptjs';

let prisma = new PrismaClient();

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'user email & password',
      credentials: {
        email: { label: '유저 이메일', type: 'email', placeholder: 'user@email.com' },
        password: { label: '패스워드', type: 'password' },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: String(credentials?.email),
          },
          select: {
            name: true,
            password: true,
          },
        });
        if (!user) throw new Error('No user found!');

        const isValid = compareSync(credentials!.password, user.password);

        if (!isValid) throw new Error('Could not log you in!');

        return { name: user.name };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
