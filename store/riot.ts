import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEachMatch } from '../types';

interface RiotReduxState {
  riot: IEachMatch[];
}

const initialState: RiotReduxState = {
  riot: [{ gameCreation: 0, gameDuration: 0, profileIconId: undefined }],
};

const riot = createSlice({
  name: 'riot',
  initialState,
  reducers: {
    setRiot(state, action: PayloadAction<IEachMatch[]>) {
      state.riot = action.payload;
    },
  },
});

export const riotActions = { ...riot.actions };

export default riot;
