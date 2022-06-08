import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import { IParticipant } from './../../../types/riotApi.d';

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
          const { gameCreation, gameDuration, participants } = eachMatchResult.data.info;

          const {
            win,
            championName,
            totalDamageDealtToChampions,
            totalMinionsKilled,
            deaths,
            kills,
            assists,
            item0,
            item1,
            item2,
            item3,
            item4,
            item5,
            item6,
            item7,
          } = participants.filter((participant: IParticipant) => participant.summonerName === summonerName)[0];

          return {
            time: { gameCreation, gameDuration },
            matchData: {
              win,
              championName,
              totalDamageDealtToChampions,
              totalMinionsKilled,
              deaths,
              kills,
              assists,
              item0,
              item1,
              item2,
              item3,
              item4,
              item5,
              item6,
              item7,
            },
          };
        })
      );

      const result = {
        profileIconId,
        allMatchData,
      };

      res.statusCode = 200;
      return res.send(result);
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
