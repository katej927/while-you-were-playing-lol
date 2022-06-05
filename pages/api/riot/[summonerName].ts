import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// 재확인 필요
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { summonerName } = req.query;

    if (!summonerName) {
      res.statusCode = 400;
      return res.send('소환사명이 없습니다.');
    }

    try {
      const {
        data: { puuid, profileIconId },
      } = await axios.get(
        encodeURI(
          `${process.env.NEXT_PUBLIC_RIOT_ROUTING_KR}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.RIOT_API_KEY}`
        )
      );

      const { data: matchIdLists } = await axios.get(
        `${process.env.NEXT_PUBLIC_RIOT_ROUTING_ASIA}/lol/match/v5/matches/by-puuid/${puuid}/ids?start=00&count=19&api_key=${process.env.RIOT_API_KEY}`
      );

      const allMatchData = await Promise.all(
        matchIdLists.map(async (matchId: string[]) => {
          const eachMatchResult = await axios.get(
            `${process.env.NEXT_PUBLIC_RIOT_ROUTING_ASIA}/lol/match/v5/matches/${matchId}?api_key=${process.env.RIOT_API_KEY}`
          );
          const { gameCreation, gameDuration } = eachMatchResult.data.info;
          return { gameCreation, gameDuration, profileIconId };
        })
      );

      res.statusCode = 200;
      return res.send(allMatchData);
    } catch (e) {
      res.statusCode = 404;
      if (axios.isAxiosError(e) && e.response) {
        console.log(e.response);
      }
      return res.end();
    }
  }

  res.statusCode = 405;
  return res.end();
};
