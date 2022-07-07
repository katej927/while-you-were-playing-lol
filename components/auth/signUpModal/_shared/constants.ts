import format from 'date-fns/format';

export const DAYS = Array.from(Array(31), (_, i) => String(i + 1));

export const MONTHS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

let currentYear = Number(format(new Date(), 'yyyy'));
let lengthOfYears = currentYear - 1900 + 1;

export const YEARS = Array.from(Array(lengthOfYears), (_, i) => String(currentYear - i));

export const PASSWORD_MIN_LENGTH = 8;

export const SPECIAL_CHARACTER_REGEX = /\W/;

export const NUMBER_REGEX = /\d/;
