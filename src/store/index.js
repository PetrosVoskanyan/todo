import { configureStore } from '@reduxjs/toolkit';
import { tasksSlice } from './slices/tasks.slice';


export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('tasks-storage-key', JSON.stringify(state.tasks.allTasks));
});

export {
  tasksSlice,
};
