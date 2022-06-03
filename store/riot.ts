import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetSummonerDataAPI } from '../types';

interface RiotReduxState {
  riot: GetSummonerDataAPI;
}

const initialState: RiotReduxState = {
  riot: {
    id: '',
    accountId: '',
    puuid: '',
    name: '',
    profileIconId: null,
    revisionDate: null,
    summonerLevel: null,
  },
};

const riot = createSlice({
  name: 'riot',
  initialState,
  reducers: {
    setRiot(state, action: PayloadAction<GetSummonerDataAPI>) {
      state.riot = action.payload;
    },
  },
});

export const riotActions = { ...riot.actions };

export default riot;
