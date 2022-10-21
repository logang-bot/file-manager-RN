import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    currentUser: {},
  },
  reducers: {
    logIn: (state, action) => {
      state.currentUser = action.payload.user;
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
