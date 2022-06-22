import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommonState, IRegionState } from 'types';

const initialState: CommonState = {
  validateMode: false,
  region: { abbreviation: 'KR', lat: 37.5326, lng: 127.024612 },
};

const common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setValidateMode(state, action: PayloadAction<boolean>) {
      state.validateMode = action.payload;
    },
    setRegion(state, action: PayloadAction<IRegionState>) {
      state.region = action.payload;
    },
  },
});

export const commonActions = { ...common.actions };

export default common;
