import {createSlice} from '@reduxjs/toolkit';

const setting = createSlice({
  name: 'setting',
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const {toggleMode} = setting.actions;
export default setting.reducer;
