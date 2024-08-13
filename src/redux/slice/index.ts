import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './auth';
import settingReducer from './setting';
import usersReducer from './users';
import projectsReducer from './projects';

const rootReducer = combineReducers({
  auth: authReducer,
  setting: settingReducer,
  users: usersReducer,
  projects: projectsReducer,
});

export default rootReducer;
