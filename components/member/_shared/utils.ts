import { secondsToMilliseconds, isSameDay, millisecondsToHours, millisecondsToMinutes } from 'date-fns';
import BigNumber from 'bignumber.js';

import { addCommas } from 'lib/utils';
import { IEachMatchInfo, IEachMatchTime } from 'types';

export const convertAllMatch = (allMatchData: IEachMatchInfo[]) => {
  const gameMillisecTime = secondsToMilliseconds(
    allMatchData.reduce((acc, match) => {
      acc = BigNumber.sum(acc, match.time.gameDuration).toNumber();
      return acc;
    }, 0)
  );

  let playinDate: IEachMatchTime[] = [];

  const { gameCreation: firstGameCreation, gameDuration: firstGameDuration } = allMatchData[0].time;
  let compareDate = { gameCreation: firstGameCreation, gameDuration: firstGameDuration };

  allMatchData?.forEach((match, idx) => {
    const { gameCreation: curDate, gameDuration: curDur } = match.time;
    const { gameCreation: compDate, gameDuration: compDur } = compareDate;

    if (idx === 0) return;

    const isSameDate = isSameDay(curDate, compDate);

    if (isSameDate) compareDate = { gameCreation: compDate, gameDuration: BigNumber.sum(curDur, compDur).toNumber() };
    if (!isSameDate) {
      playinDate.push(compareDate);
      compareDate = match.time;
    }
    if (allMatchData.length - 1 === idx) {
      playinDate.push(compareDate);
    }
  });

  return { gameMillisecTime, playinDate };
};

interface IPropsTime {
  [key: string]: string;
}

interface IPropsCost {
  [key: string]: string[];
}

export const convertTime = (time: number) => {
  const toHoursNum = millisecondsToHours(time);
  const wageThisYear = 9160;

  const toMinutes = addCommas(millisecondsToMinutes(time));
  const toHours = addCommas(toHoursNum);
  const toDays = addCommas(new BigNumber(toHoursNum).div(24).toNumber());

  const toWage = addCommas(new BigNumber(toHoursNum).multipliedBy(wageThisYear).toNumber());
  const toSleep = addCommas(toHoursNum);
  const paidPCroom = addCommas(new BigNumber(toHoursNum).multipliedBy(1300).toNumber());
  const toWalkCalories = addCommas(new BigNumber(toHoursNum).multipliedBy(350).toNumber());
  const seoulToNewYorkShuttle = addCommas(new BigNumber(toHoursNum).div(30).toNumber());
  const love = 0;

  const timeBlock: IPropsTime = { day: toDays, hours: toHours, minutes: toMinutes };

  const opportunityCost: IPropsCost = {
    wage: [toWage, `moneyUnit`],
    sleep: [toSleep, `hours`],
    PCroom: [paidPCroom, `moneyUnit`],
    love: [`${love}`, `movieUnit`],
    walk: [toWalkCalories, `walkUnit`],
    trip: [seoulToNewYorkShuttle, `tripUnit`],
  };

  const result = { timeBlock, opportunityCost };

  return result;
};
