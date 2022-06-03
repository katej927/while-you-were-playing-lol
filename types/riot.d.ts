export interface GetSummonerDataAPI {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number | null;
  revisionDate: number | null;
  summonerLevel: number | null;
}
