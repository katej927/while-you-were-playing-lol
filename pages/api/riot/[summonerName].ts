import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import {
  findBasicInfoOfSummonerAPI,
  findMatchListsAPI,
  setRoutingRegion,
  setRoutingContinent,
  findAllMatchDataAPI,
} from './_shared';
import { IParticipant } from 'types/riotApi.d';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { summonerName, region } = req.query;

    const selectedRegionAPI = setRoutingRegion[`${region}`];
    const selectedContinentAPI = setRoutingContinent[`${region}`];

    if (!summonerName) {
      res.statusCode = 400;
      return res.send('소환사명이 없습니다.');
    }

    try {
      const {
        data: { puuid, profileIconId },
      } = await axios.get(encodeURI(findBasicInfoOfSummonerAPI(`${summonerName}`, `${selectedRegionAPI}`)));

      const { data: matchIdLists } = await axios.get(findMatchListsAPI(`${puuid}`, `${selectedContinentAPI}`));

      const allMatchData = await Promise.all(
        matchIdLists.map(async (matchId: string[]) => {
          const eachMatchResult = await axios.get(findAllMatchDataAPI(`${matchId}`, `${selectedContinentAPI}`));
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
