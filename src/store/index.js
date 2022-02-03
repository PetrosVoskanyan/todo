import { configureStore } from '@reduxjs/toolkit';
import { tasksService } from './sevices/tasks.service';


export const store = configureStore({
  reducer: {
    [tasksService.reducerPath]: tasksService.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    tasksService.middleware,
  ],
});
