import { format, secondsToMinutes } from 'date-fns';
import { addCommas } from 'lib/utils';
import { IEachMatchInfo } from 'types';

interface IConvertedData {
  [key: string]: string | number | boolean | number[];
}

export const convertData = (data: IEachMatchInfo) => {
  const {
    time: { gameCreation, gameDuration },
    matchData: {
      assists,
      deaths,
      championName,
      item0,
      item1,
      item2,
      item3,
      item4,
      item5,
      item6,
      kills,
      totalDamageDealtToChampions: damageAmount,
      totalMinionsKilled: cs,
      win: isWin,
    },
  } = data;

  const playDate = format(new Date(gameCreation), 'yyyy년 MM월 dd일');
  const playDuration = secondsToMinutes(gameDuration);
  const kda = `${kills} / ${deaths} / ${assists}`;
  const itemList = [item0, item1, item2, item3, item4, item5, item6];

  const result: IConvertedData = {
    championName,
    playDate,
    playDuration,
    isWin,
    kda,
    damageAmount: addCommas(damageAmount),
    cs: addCommas(cs),
    itemList,
  };
  return result;
};
