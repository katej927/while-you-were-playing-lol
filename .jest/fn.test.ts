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
