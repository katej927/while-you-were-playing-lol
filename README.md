# ❗️진행중❗️

<br/>

# Table of Contents

1. [Link](#main1)
2. [About](#main2)
3. [Techs](#main3)
4. [Functions](#main4)

<br/>

# 📌 Link<a name="main1"></a>

👉 화면 확인 : [배포 링크](https://while-you-were-playing-lol.vercel.app/)

👉 코드 확인 : [깃헙 링크](https://github.com/katej927/while-you-were-playing-lol)

<br/>

# 📌 About<a name="main2"></a>

> League of Legends의 user를 검색하여 최근 게임 이용 시간의 기회 비용을 알아보는 앱

- 개발자: 정선미
- 기간: 9일 (Plan, Design, Development, Study)

<br/>

# 📌 Techs<a name="main3"></a>

|    Category    |           Library            |               Content               |
| :------------: | :--------------------------: | :---------------------------------: |
|      Base      |           Next.js            |           React Framework           |
|       -        |        Redux Toolkit         |           State Container           |
|       -        |   emotion (react, styled)    |             css styles              |
|       -        |          TypeScript          |        Programming Language         |
|       -        |        Riot Games API        |              Open API               |
| Authentication |         NextAuth.js          |     Authentication for Next.js      |
|       -        |   Prisma (+@prisma/client)   |      Node.js / TypeScript ORM       |
|       -        |    PostgreSQL (← SQLite)     |  object-relational database system  |
|       -        |            Docker            |          software platform          |
|       -        |           bcryptjs           |          password-hashing           |
|       -        |            Heroku            |     Cloud Application Platform      |
|       -        |            vercel            |         Deployment Platform         |
|      i18n      |        next-translate        |    translations in a Next.js env    |
|       -        |           Next SEO           |             SEO Plugin              |
|      Test      |             Jest             |        JS testing Framework         |
|     Slide      | react-slick + slick-carousel |         Carousel component          |
|      Etc       |         bignumber.js         |   arbitrary-precision arithmetic    |
|       -        |           date-fns           |           JS date utility           |
|       -        |          react-use           | Collection of essential React Hooks |
|       -        |            axios             |      Promise based HTTP client      |

<br/>

# 📌 Functions<a name="main4"></a>

- 주제

  실제 Riot API를 이용해서 user의 최근 15~20회의 League of Legends 게임 이용 시간을 확인하고 얼만큼의 다른 기회 비용이 있었는지를 알려준다

### Authentication

> 회원가입, 로그인, 로그인 유지, 로그아웃, Validation check 구현

![Kapture 2022-07-10 at 23 17 17](https://user-images.githubusercontent.com/69146527/178149731-fd3ad0b0-528d-4247-9a20-ecb1b8f6e5d0.gif)

<details>
<summary>자세히 보기</summary>

- 메인 라이브러리: NextAuth

- DB구축:
  PostgreSQL + Docker + Prisma + Heroku
- 비밀번호 암호화
  bcryptjs
- 로그인 유지

  - 로그아웃 할 때까지 로그인 유지

  - 자신의 게임 기록으로 바로 이동 가능

- `./pages/api/auth/signup.ts`

  ```tsx
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
  ```

  </details>

- API 호출 최적화 (by `promise.all`)

  다량의(20개) API 호출을 동시에 해서 대기 시간을 감소 시키고 필요한 정보만 추출하고 정리하여 한 번에 client state로 주기 위함.

- 한영 지원 (by `next-translate (i18n)`)

- 테스트 (by `Jest`)

  함수로 계산된 값들이 정확한지 (기댓값과 일치하는지) 확인

- 반응형 (일부)

  flex 활용하여 크롬으로 확인할 수 있는 모든 사이즈 (iPhone SE ~ Nest Hub Max)에서 컴포넌트의 위치가 동적으로 변한다. (진행 중)

- Responsive Carousel

  화면 너비에 비례하여 보여지는 카드의 갯수가 정해짐

- SSR 지원을 위해 `Next.js`, `emotion` 사용

- Modal

  `createPortal` 활용 (React 공식 문서 참고)

- Authentication

  > 회원가입, 로그인, 로그인 유지, 로그아웃, Validation check 구현

  - 메인 라이브러리: NextAuth

  - DB구축: PostgreSQL + Docker + Prisma + Heroku
  - 비밀번호 암호화: bcryptjs

- 성능 최적화

  - 방법

    - 컴포넌트 분리
    - memo, useMemo 등
    - 코드 스플리팅 (by `next/dynamic`)

  - 확인: React Developer Tools, Profiler Tab 등 활용
