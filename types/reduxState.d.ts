export interface IRegionState {
  abbreviation: string;
  lat: number;
  lng: number;
}

export interface CommonState {
  validateMode: boolean;
  region: IRegionState;
  scrollPosition: number;
}

export interface IEachMatchTime {
  gameCreation: number;
  gameDuration: number;
}

export interface IMatchData {
  win: boolean;
  championName: string;
  totalDamageDealtToChampions: number;
  totalMinionsKilled: number;
  deaths: number;
  kills: number;
  assists: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  item7: number;
}

export interface IEachMatchInfo {
  time: IEachMatchTime;
  matchData: IMatchData;
}

export interface IEachMatch {
  profileIconId: number;
  allMatchData: IEachMatchInfo[];
}
