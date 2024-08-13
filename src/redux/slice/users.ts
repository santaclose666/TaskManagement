import {createSlice} from '@reduxjs/toolkit';
import {accounts} from '../../models/account';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: accounts,
  },
  reducers: {
    updateUsers: (state, action) => {
      state.users = action.payload;
    },
    removeUsers: (state, action) => {
      const userId = action.payload;

      state.users = [...state.users].filter(item => item.id !== userId);
    },
    promoteUsers: (state, action) => {
      const userId = action.payload;
      const newUser = state.users.find(item => item.id === userId);

      state.users = [...state.users].map(item =>
        item.id === newUser?.id ? {...newUser, role: 'admin'} : item,
      );
    },
  },
});

export const {updateUsers, removeUsers, promoteUsers} = userSlice.actions;
export default userSlice.reducer;
