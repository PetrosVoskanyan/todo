import { createSlice } from '@reduxjs/toolkit';

const getInitialState = () => {
  return {
    allTasks: JSON.parse(localStorage.getItem('tasks-storage-key')) ?? [],
  };
};


const slice = createSlice({
  name: 'tasks',
  initialState: getInitialState(),
  reducers: {
    deleteTask: (state, { payload: index }) => {
      state.allTasks.splice(index, 1);
    },
    createTask: (state, { payload }) => {
      state.allTasks.push(payload);
    },
    deleteTodo: (state, { payload }) => {
      const { taskIndex, todoIndex } = payload;
      state.allTasks[taskIndex].todos.splice(todoIndex, 1);
    },
    createTodo: (state, { payload }) => {
      const { taskIndex, todo } = payload;
      state.allTasks[taskIndex].todos.push(todo);
    },
  },
});

const selectors = {
  selectAll: (state) => state.tasks.allTasks,
  selectByIndex: (state, index) => state.tasks.allTasks[index],
};

export const tasksSlice = {
  ...slice,
  selectors,
};
