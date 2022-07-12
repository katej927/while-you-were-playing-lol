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

    - Quick Nav Bar 일정 width 이하가 되면 사라짐
    - 박스의 위치 변화 flex 활용
    - Carousel

      화면 너비에 비례하여 보여지는 카드의 갯수가 정해짐

    - 모달창 screen이 세로/가로형인지에 따라 다른 이미지를, width에 따라 다른 크기의 글자를 보여줌

</details>

### API 호출 최적화

<details>
	<summary> 자세히 보기</summary>

> `promise.all` 활용

- 다량의(15개) API 호출을 동시에 해서 대기 시간을 감소 시킨 뒤, 필요한 정보만 추출하고 정리하여 한 번에 client state에 내려줌.

  (주어진 API 데이터에서 원하는 정보를 얻기 위한 최선의 방법)

- `./pages/api/riot/[summonerName].ts`

  ```tsx
  export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
      const { summonerName, region } = req.query;

      const selectedRegionAPI = setRoutingRegion[`${region}`];
      const selectedContinentAPI = setRoutingContinent[`${region}`];

      if (!summonerName) {
        res.statusCode = 400;
        return res.send('소환사명이 없습니다.');
      }

      try {
        const {
          data: { puuid, profileIconId },
        } = await axios.get(encodeURI(findBasicInfoOfSummonerAPI(`${summonerName}`, `${selectedRegionAPI}`)));

        const { data: matchIdLists } = await axios.get(findMatchListsAPI(`${puuid}`, `${selectedContinentAPI}`));

        const allMatchData = await Promise.all(
          matchIdLists.map(async (matchId: string[]) => {
            const eachMatchResult = await axios.get(findAllMatchDataAPI(`${matchId}`, `${selectedContinentAPI}`));
            const { gameCreation, gameDuration, participants } = eachMatchResult.data.info;

            const {
              win,
              championName,
              totalDamageDealtToChampions,
              totalMinionsKilled,
              deaths,
              kills,
              assists,
              item0,
              item1,
              item2,
              item3,
              item4,
              item5,
              item6,
              item7,
            } = participants.filter((participant: IParticipant) => participant.summonerName === summonerName)[0];

            return {
              time: { gameCreation, gameDuration },
              matchData: {
                win,
                championName,
                totalDamageDealtToChampions,
                totalMinionsKilled,
                deaths,
                kills,
                assists,
                item0,
                item1,
                item2,
                item3,
                item4,
                item5,
                item6,
                item7,
              },
            };
          })
        );

        const result = {
          profileIconId,
          allMatchData,
        };

        res.statusCode = 200;
        return res.send(result);
      } catch (e) {
        res.statusCode = 404;
        if (axios.isAxiosError(e) && e.response) {
          console.log(e.response);
        }
        return res.end();
      }
    }

    res.statusCode = 405;
    return res.end();
  };
  ```

</details>

### 전 세계의 소환사 검색을 위한 google map

<details>
	<summary> 자세히 보기</summary>

> radio 버튼이나 지도에서 국가 선택 가능

![](https://velog.velcdn.com/images/katej927/post/fe1da4e6-90a7-4417-8209-b4776ea9bbd3/image.gif)

- `./components/home/regionModal/index.tsx`

  ```tsx
  interface IProps {
    closeModal: () => void;
  }

  const RegionModal = ({ closeModal }: IProps) => {
    const {
      abbreviation: selectedAbbreviation,
      lat: selectedLat,
      lng: selectedLng,
    } = useSelector((state) => state.common.region);

    const dispatch = useDispatch();

    const onClickCloseBtn = () => closeModal();

    const onClickOption = ({ abbreviation, lat, lng }: IRegion) =>
      dispatch(commonActions.setRegion({ abbreviation, lat, lng }));

    return (
      <section css={S.container}>
        <button css={S.closeIcon} onClick={onClickCloseBtn}>
          <CloseIcon />
        </button>
        <h5 css={S.title}>지역 선택</h5>
        <section css={S.mapContainer}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.MY_GOOGLE_MAP_API! }}
            defaultCenter={{ lat: REGION_OPTIONS[0].lat, lng: REGION_OPTIONS[0].lng }}
            defaultZoom={0}
            center={{ lat: selectedLat, lng: selectedLng }}
          >
            {REGION_OPTIONS.map((region) => {
              const { abbreviation, continent, lat, lng } = region;
              return (
                <S.Marker
                  key={abbreviation}
                  lat={lat}
                  lng={lng}
                  isSelected={abbreviation === selectedAbbreviation}
                  onClick={() => onClickOption(region)}
                >
                  {continent}
                </S.Marker>
              );
            })}
          </GoogleMapReact>
        </section>
        <ul css={S.optionContainer}>
          {REGION_OPTIONS.map((region) => {
            const { abbreviation, continent } = region;
            return (
              <li key={abbreviation}>
                <S.ContinentBtn
                  onClick={() => onClickOption(region)}
                  isSelected={abbreviation === selectedAbbreviation}
                >
                  <div />
                  {continent}
                </S.ContinentBtn>
              </li>
            );
          })}
        </ul>
        <button css={S.saveBtn} type='button' onClick={onClickCloseBtn}>
          저장하기
        </button>
      </section>
    );
  };

  export default RegionModal;
  ```

</details>

### 다국어 지원

<details>
	<summary> 자세히 보기</summary>

> `next-translate (i18n)` 활용

![translation](https://user-images.githubusercontent.com/69146527/178471492-f4b12bfb-73a6-417b-8a04-d5a76d1347ed.gif)

</details>

### 최근 검색 내역

<details>
	<summary> 자세히 보기</summary>
  
- 하루 동안 검색한 내역을 local storage에 저장하여 보여주고 자정이 지난 뒤에 사이트를 이용하면 전 날의 local storage에 있던 내역은 지워진다.

- Responsive

  화면 줄어들면 사라짐 (코어 기능은 아니기 때문에)

- 검색한 것을 다시 검색할 경우, 리스트 맨 위로 올라감
- 최근 본 유저 리스트 옆에 stickey로 고정
- 클릭 시, 검색됨.
- `./components/member/qnb/index.tsx`
  ```tsx
  useEffect(() => {
    const newSearchedList = [
      { searchedName, region, profileImg, expiredAt: getTime(endOfDay(new Date())) },
      ...(store.get('recent searches') ?? ''),
    ];
    const result = uniqBy(filterExpired(newSearchedList), 'searchedName');
    store.set('recent searches', result);
    setRecentSearches(result);
  }, []);
  ```
- UI ![](https://velog.velcdn.com/images/katej927/post/4f81f9ac-fcd0-444e-b0ee-daa2ada33158/image.gif)
</details>

### 그래프

<details>
	<summary> 자세히 보기</summary>

날짜 별로 게임 시간을 산출하여 그래프로 시각화.

- UI ![](https://velog.velcdn.com/images/katej927/post/e2fe14e1-fdcd-4e6c-a8d6-a6fa5b504b4a/image.gif)

- `./components/member/graph/index.tsx`
  ```tsx
  <div css={S.container}>
    <VictoryChart {...GRAPH_OPTIONS.chart}>
      <VictoryAxis
        tickValues={convertedLeftAxisTickValues}
        tickLabelComponent={<VictoryLabel {...GRAPH_OPTIONS.leftAxisLabel} />}
      />
      <VictoryBar data={convertedData} style={{ data: { fill: ({ datum }) => datum.fill } }} {...GRAPH_OPTIONS.bar} />
      <VictoryAxis
        tickFormat={convertedRightAxisTickValues}
        tickLabelComponent={<VictoryLabel {...GRAPH_OPTIONS.rightAxisLabel} />}
        {...GRAPH_OPTIONS.rightAxis}
      />
    </VictoryChart>
  </div>
  ```

</details>

### SNS Share

<details>
	<summary> 자세히 보기</summary>

- Copy URL, Kakao talk, facebook, twitter에 사이트 공유 가능

- Meta Tag , OG 활용
- UI ![](https://velog.velcdn.com/images/katej927/post/537629d4-1dba-4416-b8eb-995a873c6d2c/image.gif)
- 코드 (`./components/layout/index.tsx`) `` tsx <Head> <title>{titleSet}</title> <meta property='og:type' content='website' /> <meta property='og:title' content={ogTitleSet} /> <meta property='og:site_name' content={`${t('common:titleOfApp')}`} /> <meta property='og:description' content={`${t('common:descOfApp')}`} /> <meta property='og:image' content={OG_IMAGE_URL} /> <meta property='og:image:width' content='1200' /> <meta property='og:image:height' content='630' /> <meta property='og:image:alt' content={`${t('common:titleOfApp')} image`} /> <meta property='og:url' content='https://while-you-were-playing-lol.vercel.app' /> </Head>  ``
  </details>

### Parallax Scrolling + Shrink Navigation

<details>
	<summary> 자세히 보기</summary>

`window.scrollY` , `transition` 을 활용하여 적절한 위치에서 텍스트를 노출시키고, nav bar를 줄이고 늘리는 애니메이션 효과를 줌.

- UI ![](https://velog.velcdn.com/images/katej927/post/0997edc1-20cf-46d5-b84e-af7698738212/image.gif)

- `./components/layout/index.tsx`

  ```tsx
  const onScroll = () => dispatch(commonActions.setScrollPosition(window.scrollY));

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  ```

- `./components/home/searchSection/index.tsx` ```tsx

      <S.DivisionText isOpacityOn={scrollPosition >= 130}>(...)</S.DivisionText>
      <S.DivisionFigure isOpacityOn={scrollPosition >= 200}>
      	(...)
      </S.DivisionFigure>
      <S.SectionTitle isOpacityOn={scrollPosition >= 242}>(...)</S.SectionTitle>
      <S.Title isOpacityOn={scrollPosition >= 365}>
      	(...)
      </S.Title>
      <S.Desc isOpacityOn={scrollPosition >= 475}>
      	(...)
      </S.Desc>
      <S.Form onSubmit={onSubmit} isOpacityOn={scrollPosition >= 600}>
      	(...)
      </S.Form>
      ```

  </details>

### Modal

<details>
	<summary> 자세히 보기</summary>
createPortal 활용 (React 공식 문서 참고)
</details>

### Toast Message

<details>
	<summary> 자세히 보기</summary>

alert가 띄워지는 경우에 Toast msg를 띄워 보다 직관적으로 상태를 설명함.

- UI ![](https://velog.velcdn.com/images/katej927/post/e480cc0f-58b9-43c7-8d0c-b00fcb8cc005/image.gif)

</details>
