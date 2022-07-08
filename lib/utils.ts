import BigNumber from 'bignumber.js';

export const addCommas = (num: number) =>
  new BigNumber(num)
    .integerValue()
    .toNumber()
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
