import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    data: null,
  },
  reducers: {
    login: (state, action) => {
      state.data = action.payload;
    },
    updateUser: (state, action) => {
      state.data = action.payload;
    },
    logout: state => {
      state.data = null;
    },
  },
});

export const {login, updateUser, logout} = authSlice.actions;
export default authSlice.reducer;
