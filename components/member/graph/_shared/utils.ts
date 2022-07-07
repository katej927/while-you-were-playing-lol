import format from 'date-fns/format';
import secondsToMinutes from 'date-fns/secondsToMinutes';

import { addCommas } from 'lib/utils';
import { IEachMatchTime } from 'types';
import { colors } from 'styles/constants';

export const convertLeftAxisTickValues = (data: IEachMatchTime[]) =>
  data.map((play) => format(new Date(play.gameCreation), 'yyyy/MM/dd')).reverse();

export const convertRightAxisTickValues = (data: IEachMatchTime[], timeUnit: string) =>
  data.map((play) => addCommas(secondsToMinutes(play.gameDuration)) + ` ${timeUnit}`).reverse();

const repeatColors = (colors: string[], time: number) => [].concat(...Array(time).fill(colors));

export const convertData = (data: IEachMatchTime[]) =>
  data.map((play, idx) => {
    return {
      ...play,
      gameCreation: format(new Date(play.gameCreation), 'yyyy/MM/dd'),
      fill: repeatColors(
        [
          colors.red,
          colors.orange,
          colors.yellow,
          colors.lightGreen,
          colors.turquoise,
          colors.lightBlue,
          colors.blue,
          colors.theme,
        ],
        2
      )[idx],
    };
  });
