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
        console.log('credentials', credentials);
        const user = await prisma.user.findUnique({
          where: {
            email: String(credentials?.email),
          },
          select: {
            name: true,
            email: true,
            summonerName: true,
            password: true,
          },
        });

        console.log('user', user);

        if (!user) throw new Error('No user found!');

        const isValid = compareSync(credentials!.password, user.password);

        if (!isValid) throw new Error('Could not log you in!');

        console.log('result', { name: user.name, email: user.email });
        return user;
      },
    }),
  ],
  callbacks: {
    session: async ({ session, user }) => {
      console.log('callbacks session', session);
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
