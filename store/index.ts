import { AnyAction } from 'redux';
import { HYDRATE, createWrapper, MakeStore } from 'next-redux-wrapper';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';

import riot from './riot';
import common from './common';
import auth from './auth';

const rootReducer = combineReducers({
  riot: riot.reducer,
  common: common.reducer,
  auth: auth.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

let initialRootState: RootState;

const reducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    if (state === initialRootState) {
      return {
        ...state,
        ...action.payload,
      };
    }
    return state;
  }
  return rootReducer(state, action);
};

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const initStore: MakeStore<any> = () => {
  const store = configureStore({
    reducer,
    devTools: true,
  });
  initialRootState = store.getState();
  return store;
};

export const wrapper = createWrapper(initStore);
