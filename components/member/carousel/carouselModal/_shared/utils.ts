import { format, secondsToMinutes } from 'date-fns';
import { addCommas } from 'lib/utils';
import { IEachMatchInfo } from 'types';
import { IResult } from '.';

export const convertData = (data: IEachMatchInfo, min: string) => {
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

  const playDate = format(new Date(gameCreation), 'yyyy/MM/dd');
  const playDuration = `${secondsToMinutes(gameDuration)} ${min}`;
  const kda = `${kills} / ${deaths} / ${assists}`;
  const itemList = [item0, item1, item2, item3, item4, item5, item6];

  const result: IResult = {
    championName,
    playDate,
    playDuration,
    isWin: isWin ? 'victory' : 'defeat',
    kda,
    damageAmount: addCommas(damageAmount),
    cs: addCommas(cs),
    itemList,
  };
  return result;
};
