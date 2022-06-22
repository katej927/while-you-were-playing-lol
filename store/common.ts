import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommonState } from 'types';

const initialState: CommonState = {
  validateMode: false,
  region: 'KR',
};

const common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setValidateMode(state, action: PayloadAction<boolean>) {
      state.validateMode = action.payload;
    },
    setRegion(state, action: PayloadAction<string>) {
      state.region = action.payload;
    },
  },
});

export const commonActions = { ...common.actions };

export default common;
