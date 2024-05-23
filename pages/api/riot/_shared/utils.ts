export const findPuuidOfSummonerAPI = (summonerName: string, regionAPI: string, selectedContinentAPI: string) =>
  `${selectedContinentAPI}/riot/account/v1/accounts/by-riot-id/${summonerName}/${regionAPI}?api_key=${process.env.RIOT_API_KEY}`;

export const findBasicInfoOfSummonerAPI = (selectedContinentAPI: string, puuid: string) =>
  `${selectedContinentAPI}/lol/summoner/v4/summoners/by-puuid/${puuid}`;

export const findMatchListsAPI = (puuid: string, selectedContinentAPI: string) =>
  `${selectedContinentAPI}/lol/match/v5/matches/by-puuid/${puuid}/ids?start=00&count=15&api_key=${process.env.RIOT_API_KEY}`;

export const findAllMatchDataAPI = (matchId: string, selectedContinentAPI: string) =>
  `${selectedContinentAPI}/lol/match/v5/matches/${matchId}?api_key=${process.env.RIOT_API_KEY}`;
