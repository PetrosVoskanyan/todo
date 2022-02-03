import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tasksService = createApi({
  reducerPath: 'tasksService',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://doit-61ddf-default-rtdb.firebaseio.com/',
  }),
  tagTypes: ['tasks'],
  endpoints: (build) => ({
    fetchTaskList: build.query({
      query: () => 'tasks.json',
      providesTags: ['tasks'],
    }),
    createTask: build.mutation({
      query: (task) => ({
        url: `tasks/${task.uid}.json`,
        method: `PUT`,
        body: {
          ...task,
          todos: task.todos?.reduce((result, todo) => ({
            ...result,
            [todo.uid]: todo,
          }), null),
        },
      }),
      invalidatesTags: ['tasks'],
    }),
    deleteTask: build.mutation({
      query: (taskUid) => ({
        url: `tasks/${taskUid}.json`,
        method: 'DELETE',
      }),
      invalidatesTags: ['tasks'],
    }),
    createTodo: build.mutation({
      query: ({ taskUid, todo }) => ({
        url: `tasks/${taskUid}/todos/${todo.uid}.json`,
        method: 'PUT',
        body: todo,
      }),
      invalidatesTags: ['tasks'],
    }),
    changeIsDone: build.mutation({
      query: ({ taskUid, todoUid, isDone }) => ({
        url: `tasks/${taskUid}/todos/${todoUid}/isDone.json`,
        method: 'PUT',
        body: isDone,
      }),
      invalidatesTags: ['tasks'],
    }),
    deleteTodo: build.mutation({
      query: ({ taskUid, todoUid }) => ({
        url: `tasks/${taskUid}/todos/${todoUid}.json`,
        method: 'DELETE',
      }),
      invalidatesTags: ['tasks'],
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useFetchTaskListQuery,
  useDeleteTaskMutation,
  useCreateTodoMutation,
  useChangeIsDoneMutation,
  useDeleteTodoMutation,
} = tasksService;
