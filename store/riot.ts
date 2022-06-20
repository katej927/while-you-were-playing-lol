import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEachMatch } from '../types';

interface RiotReduxState {
  riot: IEachMatch;
}

const initialState: RiotReduxState = {
  riot: { profileIconId: 0, allMatchData: [] },
};

const riot = createSlice({
  name: 'riot',
  initialState,
  reducers: {
    setRiot(state, action: PayloadAction<IEachMatch>) {
      state.riot = action.payload;
    },
  },
});

export const riotActions = { ...riot.actions };

export default riot;
