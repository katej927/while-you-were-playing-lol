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

export const setRoutingContinent: TSetRouting = {
  NA: process.env.NEXT_PUBLIC_RIOT_ROUTING_AMERICAS,
  BR: process.env.NEXT_PUBLIC_RIOT_ROUTING_AMERICAS,
  LAN: process.env.NEXT_PUBLIC_RIOT_ROUTING_AMERICAS,
  LAS: process.env.NEXT_PUBLIC_RIOT_ROUTING_AMERICAS,
  OC: process.env.NEXT_PUBLIC_RIOT_ROUTING_AMERICAS,

  KR: process.env.NEXT_PUBLIC_RIOT_ROUTING_ASIA,
  JP: process.env.NEXT_PUBLIC_RIOT_ROUTING_ASIA,

  EUN: process.env.NEXT_PUBLIC_RIOT_ROUTING_EUROPE,
  EUW: process.env.NEXT_PUBLIC_RIOT_ROUTING_EUROPE,
  RU: process.env.NEXT_PUBLIC_RIOT_ROUTING_EUROPE,
  TR: process.env.NEXT_PUBLIC_RIOT_ROUTING_EUROPE,
};

export const findBasicInfoOfSummonerAPI = (summonerName: string, regionAPI: string) =>
  `${regionAPI}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.RIOT_API_KEY}`;

export const findMatchListsAPI = (puuid: string, selectedContinentAPI: string) =>
  `${selectedContinentAPI}/lol/match/v5/matches/by-puuid/${puuid}/ids?start=00&count=15&api_key=${process.env.RIOT_API_KEY}`;

export const findAllMatchDataAPI = (matchId: string, selectedContinentAPI: string) =>
  `${selectedContinentAPI}/lol/match/v5/matches/${matchId}?api_key=${process.env.RIOT_API_KEY}`;
