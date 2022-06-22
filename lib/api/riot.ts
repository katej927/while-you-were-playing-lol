import axios from '.';
import { IEachMatch } from 'types';

interface IgetSummonerDataProps {
  summonerName: string;
  region: string;
}

export const getSummonerDataAPI = ({ summonerName, region }: IgetSummonerDataProps) =>
  axios.get<IEachMatch>(`/api/riot/${encodeURI(summonerName)}`, {
    params: {
      region,
    },
  });
