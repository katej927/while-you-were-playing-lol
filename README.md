# ❗️진행중❗️

<br/>

# Table of Contents

1. [Link](#main1)
2. [About](#main2)
3. [Techs](#main3)
4. [Functions](#main4)
5. [Remembrance](#main5)

<br/>

# 📌 Link<a name="main1"></a>

👉 화면 확인 : [배포 링크](https://while-you-were-playing-lol.vercel.app/)

👉 코드 확인 : [깃헙 링크](https://github.com/katej927/while-you-were-playing-lol)

# 📌 About<a name="main2"></a>

> League of Legends의 user를 검색하여 최근 게임 이용 시간의 기회 비용을 알아보는 앱

- 개발자: 정선미
- 기간: ‘22.6.3 ~ 6.5 (기획 및 개발)

# 📌 Techs<a name="main3"></a>

|   Categories   |           Library            |               content               |
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

# 📌 Functions<a name="main4"></a>

- 주제

  실제 Riot API를 이용해서 user의 최근 20회의 League of Legends 게임 이용 시간을 확인하고 얼만큼의 다른 기회 비용이 있었는지를 알려준다

- API 호출 최적화 (by `promise.all`) 다량의(20개) API 호출을 동시에 해서 대기 시간을 감소 시키고 필요한 정보(게임 시간, 게임 일자, 사용자 아이콘)만 모아서 한 번에 client state로 주기 위함.
- 한영 지원 (by `next-translate (i18n)`)
- 테스트 (by `Jest`) 함수로 계산된 값들이 정확한지 (기댓값과 일치하는지) 확인
- 반응형크롬으로 확인할 수 있는 모든 사이즈 (iPhone SE ~ Nest Hub Max)
- SSR 지원을 위해 `Next.js`, `emotion` 사용
