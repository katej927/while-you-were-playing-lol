import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserType, UserState } from 'types';

const initialState: UserState = {
  id: 0,
  email: '',
  firstname: '',
  lastname: '',
  birthday: '',
  profileImage: '',
  isLogged: false,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedUser(state, action: PayloadAction<IUserType>) {
      state = { ...action.payload, isLogged: true };
      return state;
    },
    initUser(state) {
      state = initialState;
      return state;
    },
  },
});

export const userActions = { ...user.actions };

export default user;
