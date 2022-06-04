import { secondsToMilliseconds, isSameDay, millisecondsToHours, millisecondsToMinutes } from 'date-fns';
import { IEachMatchTime } from '../../types';

export const convertAllMatch = (allMatchData: IEachMatchTime[]) => {
  const gameMillisecTime = secondsToMilliseconds(
    allMatchData.reduce((acc, match) => {
      acc = acc + match.gameDuration;
      return acc;
    }, 0)
  );

  let playinDate: IEachMatchTime[] = [];
  let compareDate = { gameCreation: allMatchData[0].gameCreation, gameDuration: allMatchData[0].gameDuration };
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

  interface IPropsTime {
    [key: string]: string;
  }

  interface IPropsCost {
    [key: string]: string[];
  }

  const timeBlock: IPropsTime = { day: toDays, hours: toHours, minutes: toMinutes };

  const opportunityCost: IPropsCost = {
    wage: [toWage, `moneyUnit`],
    sleep: [toSleep, `hours`],
    PCroom: [paidPCroom, `moneyUnit`],
    love: [`${love}`, `movieUnit`],
    walk: [toWalkCalories, `cal`],
    trip: [seoulToNewYorkShuttle, `tripUnit`],
  };

  const result = { timeBlock, opportunityCost };

  return result;
};
