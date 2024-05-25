export const findPuuidOfSummonerAPI = (summonerName: string, selectedTagline: string, selectedContinentAPI: string) =>
  `${selectedContinentAPI}/riot/account/v1/accounts/by-riot-id/${summonerName}/${selectedTagline}?api_key=${process.env.RIOT_API_KEY}`;

export const findBasicInfoOfSummonerAPI = (selectedRegionAPI: string, puuid: string) =>
  `${selectedRegionAPI}/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${process.env.RIOT_API_KEY}`;

export const findMatchListsAPI = (puuid: string, selectedContinentAPI: string) =>
  `${selectedContinentAPI}/lol/match/v5/matches/by-puuid/${puuid}/ids?start=00&count=15&api_key=${process.env.RIOT_API_KEY}`;

export const findAllMatchDataAPI = (matchId: string, selectedContinentAPI: string) =>
  `${selectedContinentAPI}/lol/match/v5/matches/${matchId}?api_key=${process.env.RIOT_API_KEY}`;
