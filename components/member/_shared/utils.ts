import { secondsToMilliseconds, isSameDay, millisecondsToHours, millisecondsToMinutes } from 'date-fns';
import BigNumber from 'bignumber.js';
import { IEachMatchInfo, IEachMatchTime } from '../../../types';

export const convertAllMatch = (allMatchData: IEachMatchInfo[]) => {
  const gameMillisecTime = secondsToMilliseconds(
    allMatchData.reduce((acc, match) => {
      acc = BigNumber.sum(acc, match.time.gameDuration).toNumber();
      return acc;
    }, 0)
  );

  const { gameCreation: firstGameCreation, gameDuration: firstGameDuration } = allMatchData[0].time;
  let playinDate: IEachMatchTime[] = [];
  let compareDate = { gameCreation: firstGameCreation, gameDuration: firstGameDuration };

  allMatchData?.forEach((match, idx) => {
    const { gameCreation: curDate, gameDuration: curDur } = match.time;
    const { gameCreation: compDate, gameDuration: compDur } = compareDate;
    if (idx === 0) return;

    const isSameDate = isSameDay(curDate, compDate);
    if (isSameDate) compareDate = { gameCreation: compDate, gameDuration: curDur + compDur };
    if (!isSameDate) {
      if (allMatchData.length - 1 === idx) {
        playinDate.push(compareDate, {
          gameCreation: allMatchData[idx].time.gameCreation,
          gameDuration: allMatchData[idx].time.gameDuration,
        });
      } else {
        playinDate.push(compareDate);
        compareDate = match.time;
      }
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
