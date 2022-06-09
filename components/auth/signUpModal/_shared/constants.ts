import format from 'date-fns/format';

export const DAYS = Array.from(Array(31), (_, i) => String(i + 1));

export const MONTHS = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

let currentYear = Number(format(new Date(), 'yyyy'));
let lengthOfYears = currentYear - 1900 + 1;

export const YEARS = Array.from(Array(lengthOfYears), (_, i) => String(currentYear - i));
