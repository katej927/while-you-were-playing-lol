interface TSetRouting {
  [key: string]: string | undefined;
}

export const setRoutingRegion: TSetRouting = {
  KR: process.env.NEXT_PUBLIC_RIOT_ROUTING_KR,
  BR: process.env.NEXT_PUBLIC_RIOT_ROUTING_BR,
  EUN: process.env.NEXT_PUBLIC_RIOT_ROUTING_EUN,
  EUW: process.env.NEXT_PUBLIC_RIOT_ROUTING_EUW,
  JP: process.env.NEXT_PUBLIC_RIOT_ROUTING_JP,
  LAN: process.env.NEXT_PUBLIC_RIOT_ROUTING_LAN,
  LAS: process.env.NEXT_PUBLIC_RIOT_ROUTING_LAS,
  NA: process.env.NEXT_PUBLIC_RIOT_ROUTING_NA,
  OC: process.env.NEXT_PUBLIC_RIOT_ROUTING_OC,
  RU: process.env.NEXT_PUBLIC_RIOT_ROUTING_RU,
  TR: process.env.NEXT_PUBLIC_RIOT_ROUTING_TR,
};

export const setRoutingContinent = (region: string) => {
  if (region === 'NA' || 'BR' || 'LAN' || 'LAS' || 'OCE') return process.env.NEXT_PUBLIC_RIOT_ROUTING_AMERICAS;
  if (region === 'KR' || 'JP') return process.env.NEXT_PUBLIC_RIOT_ROUTING_ASIA;
  if (region === 'EUNE' || 'EUW' || 'TR' || 'RU') return process.env.NEXT_PUBLIC_RIOT_ROUTING_EUROPE;
};

export const findBasicInfoOfSummonerAPI = (summonerName: string, regionAPI: string) =>
  `${regionAPI}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.RIOT_API_KEY}`;

export const findMatchListsAPI = (puuid: string, selectedContinentAPI: string) =>
  `${selectedContinentAPI}/lol/match/v5/matches/by-puuid/${puuid}/ids?start=00&count=15&api_key=${process.env.RIOT_API_KEY}`;

export const findAllMatchDataAPI = (matchId: string, selectedContinentAPI: string) =>
  `${selectedContinentAPI}/lol/match/v5/matches/${matchId}?api_key=${process.env.RIOT_API_KEY}`;
