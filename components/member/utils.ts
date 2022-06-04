import { secondsToMilliseconds, isSameDay, millisecondsToHours, millisecondsToMinutes } from 'date-fns';
import { IEachMatch } from '../../types';

export const convertAllMatch = (allMatchData: IEachMatch[]) => {
  const gameMillisecTime = secondsToMilliseconds(
    allMatchData.reduce((acc, match) => {
      acc = acc + match.gameDuration;
      return acc;
    }, 0)
  );

  let playinDate: IEachMatch[] = [];
  let compareDate = allMatchData[0];
  allMatchData?.forEach((match, idx) => {
    const { gameCreation: curDate, gameDuration: curDur } = match;
    const { gameCreation: compDate, gameDuration: compDur } = compareDate;
    const isSameDate = isSameDay(curDate, compDate);
    if (isSameDate) compareDate = { gameCreation: compDate, gameDuration: curDur + compDur };
    if (!isSameDate) {
      playinDate.push(compareDate);
      compareDate = match;
    }
  });
  return { gameMillisecTime, playinDate };
};

const addCommas = (num: number) =>
  Math.round(num)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const convertTime = (time: number) => {
  const toHoursNum = millisecondsToHours(time);
  const wageThisYear = 9160;

  const toMinutes = addCommas(millisecondsToMinutes(time));
  const toHours = addCommas(toHoursNum);
  const toDays = addCommas(toHoursNum / 24);

  const toWage = addCommas(toHoursNum * wageThisYear);
  const toSleep = addCommas(toHoursNum / 8);
  const paidPCroom = addCommas(toHoursNum * 1300);
  const toWalkCalories = addCommas(toHoursNum * 350);
  const seoulToNewYorkShuttle = addCommas(toHoursNum / 30);
  const love = 0;

  interface IProps {
    [key: string]: string;
  }

  const timeBlock: IProps = { 일: toDays, 시간: toHours, 분: toMinutes };
  const opportunityCost: IProps = {
    '2022년 최저시급으로': `${toWage}원`,
    '수면 시간': `${toSleep}시간`,
    '피시방에서 했다면': `${paidPCroom}원`,
    '이성과 영화 볼 횟수': `${love}회`,
    '걸어서 소모할 칼로리': `${toWalkCalories}cal`,
    '서울에서 뉴욕까지': `${seoulToNewYorkShuttle}번 왕복`,
  };

  const result = { timeBlock, opportunityCost };

  return result;
};
