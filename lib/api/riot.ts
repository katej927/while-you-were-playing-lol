import axios from '.';
import { GetSummonerDataAPI } from '../../types';

export const getSummonerDataAPI = (summonerName: string) => axios.get<GetSummonerDataAPI>(`/api/riot/${summonerName}`);
