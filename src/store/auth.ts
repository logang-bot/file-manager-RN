import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    currentUser: {},
  },
  reducers: {
    logIn: (state, {payload}: PayloadAction<{}>) => {
      state.currentUser = payload;
      state.isLoggedIn = true;
    },
    logout: state => {
      state.currentUser = {};
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
