import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// 재확인 필요
export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('req.query', req.query);
  if (req.method === 'GET') {
    const { summonerName } = req.query;
    console.log('summonerName', summonerName);
    if (!summonerName) {
      res.statusCode = 400;
      return res.send('소환사명이 없습니다.');
    }
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_RIOT_ROUTING_KR}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.RIOT_API_KEY}`
      );
      const { puuid } = data;

      console.log('riot 소환사 결과 data', puuid);
      // const data2 = await axios.get(
      //   `${process.env.NEXT_PUBLIC_RIOT_ROUTING_KR}/lol/match/v5/matches/by-puuid/${puuid}/ids?start=00&count=100`
      // );

      // const data2 = await axios.get(
      //   `${process.env.NEXT_PUBLIC_RIOT_ROUTING_KR}/lol/match/v5/matches/by-puuid/${puuid}/ids?start=00&count=100`
      // );

      // console.log('data2', data2);
      res.statusCode = 200;
      return res.send(data);
    } catch (e) {
      res.statusCode = 404;
      console.log(e);
      return res.end();
    }
  }

  res.statusCode = 405;
  return res.end();
};

// `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/롸이옷?api_key=RGAPI-b61784b6-aaa5-43a2-85b1-44620f9c0033`
// https://kr.api.riotgames.com/lol/match/v5/matches/by-puuid/qdp1mJPEsdIq7tJAeaQ-0yI3XtxRG__i72MUe6BFAFznz_A_FpylbraUhcn59Dt_mdc1KMNQlNr9cQ/ids?start=00&count=100
