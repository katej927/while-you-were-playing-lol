import { isPast } from 'date-fns';
import { IRecentSearches } from '.';
import { REGION_OPTIONS } from 'lib/constants';

export const filterExpired = (searches: IRecentSearches[]) => searches.filter((search) => !isPast(search.expiredAt));

export const findRegionLocation = (regionProps: string) =>
  REGION_OPTIONS.filter((region) => region.abbreviation === regionProps);
