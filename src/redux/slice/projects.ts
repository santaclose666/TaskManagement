import {createSlice} from '@reduxjs/toolkit';

const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [],
  },
  reducers: {
    addProject: (state, action) => {
      state.projects = [...state.projects, action.payload];
    },
    updateProject: (state, action) => {
      const newProject = action.payload;

      const projectsUpdate = state.projects.map(item =>
        item?.id === newProject.id ? newProject : item,
      );

      state.projects = projectsUpdate;
    },
    removeProject: (state, action) => {
      const id = action.payload;
      state.projects = [...state.projects].filter(item => item?.id !== id);
    },
  },
});

export const {addProject, updateProject, removeProject} = projectSlice.actions;
export default projectSlice.reducer;
