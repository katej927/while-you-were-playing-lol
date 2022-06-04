export interface IEachMatchTime {
  gameCreation: number;
  gameDuration: number;
}

export interface IEachMatch extends IEachMatchTime {
  profileIconId: number | undefined;
}
