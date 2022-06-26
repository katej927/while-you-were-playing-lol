import { isBefore } from 'date-fns';

import { IRecentSearches } from '.';

export const filterExpired = (searches: IRecentSearches[]) =>
  searches.filter((search) => !isBefore(new Date(search.expiredAt), new Date()));
