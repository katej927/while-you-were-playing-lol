import axios from '.';
import { IEachMatch } from '../../types';

export const getSummonerDataAPI = (summonerName: string) =>
  axios.get<IEachMatch[]>(`/api/riot/${encodeURI(summonerName)}`);
