import { isPast } from 'date-fns';
import { IRecentSearches } from '.';

export const filterExpired = (searches: IRecentSearches[]) => searches.filter((search) => !isPast(search.expiredAt));
