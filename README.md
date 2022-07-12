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

<br/>

# 📌 Techs<a name="main3"></a>

|    Category    |           Library            |                 Content                  |
| :------------: | :--------------------------: | :--------------------------------------: |
|      Base      |           Next.js            |             React Framework              |
|       -        |        Redux Toolkit         |             State Container              |
|       -        |   emotion (react, styled)    |                css styles                |
|       -        |          TypeScript          |           Programming Language           |
|       -        |        Riot Games API        |                 Open API                 |
| Authentication |         NextAuth.js          |        Authentication for Next.js        |
|       -        |   Prisma (+@prisma/client)   |         Node.js / TypeScript ORM         |
|       -        |    PostgreSQL (← SQLite)     |    object-relational database system     |
|       -        |            Docker            |            software platform             |
|       -        |           bcryptjs           |             password-hashing             |
|       -        |            Heroku            |        Cloud Application Platform        |
|       -        |            vercel            |           Deployment Platform            |
|      i18n      |        next-translate        |      translations in a Next.js env       |
|      Test      |             Jest             |           JS testing Framework           |
|      Map       |       google-map-react       |        set of the Google Maps API        |
|  localStorage  |           storejs            | JS API for handling browser localStorage |
|     Graph      |           victory            | modular charting and data visualization  |
|     Slide      | react-slick + slick-carousel |            Carousel component            |
|      Etc       |         bignumber.js         |      arbitrary-precision arithmetic      |
|       -        |           date-fns           |             JS date utility              |
|       -        |          react-use           |   Collection of essential React Hooks    |
|       -        |            axios             |        Promise based HTTP client         |
|       -        |          facepaint           |  Responsive style values for css-in-js   |
|       -        |            lodash            |      modern JavaScript utility lib       |

<br/>

# 📌 Functions<a name="main4"></a>

- 주제

  실제 Riot API를 이용해서 user의 최근 15~20회의 League of Legends 게임 이용 시간을 확인하고 얼만큼의 다른 기회 비용이 있었는지를 알려준다

## Overall

### 1. SSR 지원을 위해 `Next.js`, `emotion` 사용

### 2. 성능 최적화

<details>
	<summary> 자세히 보기</summary>

- 방법

  - 코드 스플리팅 (by `next/dynamic`)

  - `useCallback`, `useMemo`, `memo` 등 활용
  - 사용에 따라 컴포넌트 분리하여 렌더링 최소화

- 확인 React Developer Tools, Profiler / Lighthouse 탭 등을 통해 리렌더링 파악 및 성능 최적화 도모
  </details>

### 3. Test (by `Jest`)

<details>
	<summary> 자세히 보기</summary>

함수로 계산된 값들이 정확한지 (기댓값과 일치하는지) 확인

- 결과 ![](https://velog.velcdn.com/images/katej927/post/6aa80285-1609-4539-99e9-de93c82dc03c/image.png)
- `./.jest/fn.test.ts`

  ```tsx
  import { convertAllMatch, convertTime } from 'components/member/_shared';
  import { addCommas } from 'lib/utils';

  describe(`member/_shared/utils`, () => {
    test('convertAllMatch 함수의 결과 값', () => {
      const testArr = [
        {
          matchData: {
            assists: 8,
            championName: 'Ezreal',
            deaths: 1,
            item0: 3042,
            item1: 3078,
            item2: 6694,
            item3: 3158,
            item4: 3156,
            item5: 0,
            item6: 3340,
            kills: 12,
            totalDamageDealtToChampions: 24287,
            totalMinionsKilled: 159,
            win: true,
          },
          time: { gameCreation: 1657200710000, gameDuration: 1712 },
        },
        {
          matchData: {
            assists: 8,
            championName: 'Ezreal',
            deaths: 2,
            item0: 3042,
            item1: 3078,
            item2: 3133,
            item3: 1036,
            item4: 1036,
            item5: 1001,
            item6: 3340,
            kills: 8,
            totalDamageDealtToChampions: 17167,
            totalMinionsKilled: 149,
            win: true,
          },
          time: { gameCreation: 1657197354000, gameDuration: 1634 },
        },
        {
          matchData: {
            assists: 7,
            championName: 'Akali',
            deaths: 5,
            item0: 1054,
            item1: 4633,
            item2: 3020,
            item3: 3165,
            item4: 4645,
            item5: 4630,
            item6: 3340,
            kills: 7,
            totalDamageDealtToChampions: 16870,
            totalMinionsKilled: 188,
            win: false,
          },
          time: { gameCreation: 1657031470000, gameDuration: 2033 },
        },
      ];

      const expectResult = {
        gameMillisecTime: 5379000,
        playinDate: [
          { gameCreation: 1657200710000, gameDuration: 3346 },
          { gameCreation: 1657031470000, gameDuration: 2033 },
        ],
      };

      expect(convertAllMatch(testArr)).toStrictEqual(expectResult);
    });

    test('convertTime 함수의 결과 값', () => {
      expect(convertTime(26914000)).toStrictEqual({
        timeBlock: { day: '0', hours: '7', minutes: '448' },
        opportunityCost: {
          PCroom: ['9,100', 'moneyUnit'],
          love: ['0', 'movieUnit'],
          sleep: ['7', 'hours'],
          study: ['448', 'studyUnit'],
          wage: ['64,120', 'moneyUnit'],
          walk: ['2,450', 'walkUnit'],
        },
      });
    });
  });

  describe('lib/utils', () => {
    test('addCommas 함수의 결과 값', () => {
      expect(addCommas(27000)).toStrictEqual('27,000');
    });
  });
  ```

  </details>

### 4. Google Analytics

<details>
	<summary> 자세히 보기</summary>

GA를 적용하여 유입된 방문자들의 사이트 이용을 분석

![](https://velog.velcdn.com/images/katej927/post/c43f4ec4-db0c-4f39-8250-e1a9eec960c5/image.png)

</details>

### 5. JavaScript의 부정확한 계산 방지

<details>
	<summary> 자세히 보기</summary>

`bignumber.js`를 통해 정밀한 산수 계산

- `./components/member/_shared/utils.ts`

  ```tsx
  const toDays = addCommas(new BigNumber(toHoursNum).div(24).toNumber());

  const toWage = addCommas(new BigNumber(toHoursNum).multipliedBy(wageThisYear).toNumber());
  const toSleep = addCommas(toHoursNum);
  const paidPCroom = addCommas(new BigNumber(toHoursNum).multipliedBy(1300).toNumber());
  const toWalkCalories = addCommas(new BigNumber(toHoursNum).multipliedBy(350).toNumber());
  const study1WordPer1Min = addCommas(new BigNumber(toMinutes).div(1).toNumber());
  ```

</details>

### Authentication

> 회원가입, 로그인, 로그인 유지, 로그아웃, Validation check 구현

![Kapture 2022-07-10 at 23 17 17](https://user-images.githubusercontent.com/69146527/178149731-fd3ad0b0-528d-4247-9a20-ecb1b8f6e5d0.gif)

<details>
<summary>자세히 보기</summary>

- 메인 라이브러리: NextAuth

- DB구축: PostgreSQL + Docker + Prisma + Heroku
- 비밀번호 암호화 bcryptjs
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

### Responsive Web & Mobile

<details>
	<summary> 자세히 보기</summary>

> screen의 width길이나 세로와 가로비율에 따라 적절한 UI를 보여줌

- 구현 방법

  - HTML

    `picture` / `source` 의 `media`, `srcSet` 속성 / `img` tags

  - CSS(`flex` , `media query`)
  - `facepaint` 라이브러리
  - 코드 (`./styles/mixin/index.ts`)
    ```tsx
    const breakpoints = [376, 600, 768, 1000, 1200, 1300, 1800, 2400];
    const screenMode = ['landscape', 'portrait'];
    export const responsive = {
      onlyScreen: facepaint(breakpoints.map((bp) => `@media only screen and (min-width: ${bp}px)`)),
      isPortraitOrLandscape: facepaint(
        screenMode.map((screenMode) => `@media only screen and (orientation: ${screenMode})`)
      ),
    };
    ```

- UI 확인

  - Home Page ![responisve_main](https://user-images.githubusercontent.com/69146527/178425109-235d4475-f1a7-4bee-a211-af509811cbe9.gif)

          - 글자 크기의 변화

          - 지역 선택 모달창

              지도 크기 변화

  - Member Page ![](https://velog.velcdn.com/images/katej927/post/97204d4e-7e9a-406c-86e8-f8437c224227/image.gif) ![](https://velog.velcdn.com/images/katej927/post/a6740b35-c984-4059-a707-86e92ee832b9/image.gif)

    - Quick Nav Bar
      일정 width 이하가 되면 사라짐
    - 박스의 위치 변화
      flex 활용
    - Carousel

      화면 너비에 비례하여 보여지는 카드의 갯수가 정해짐

    - 모달창
      screen이 세로/가로형인지에 따라 다른 이미지를, width에 따라 다른 크기의 글자를 보여줌

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
