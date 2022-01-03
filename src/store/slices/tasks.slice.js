import { createSlice } from '@reduxjs/toolkit';
import { genUid } from 'light-uid';

const getInitialState = () => {
  return {
    allTasks: JSON.parse(localStorage.getItem('tasks-storage-key')) ?? [],
  };
};


const slice = createSlice({
  name: 'tasks',
  initialState: getInitialState(),
  reducers: {
    deleteTask: (state, { payload: uid }) => {
      state.allTasks = state.allTasks.filter(task => task.uid !== uid);
    },
    createTask: (state, { payload }) => {
      payload.todos = payload.todos.map((todo) => ({ uid: genUid(), ...todo }));
      state.allTasks.push({ uid: genUid(), ...payload });
    },
    deleteTodo: (state, { payload }) => {
      const { taskUid, todoUid } = payload;
      const task = state.allTasks.find((t) => t.uid === taskUid);
      task.todos = task.todos.filter((todo) => todo.uid !== todoUid);
    },
    createTodo: (state, { payload }) => {
      const { taskUid, todo } = payload;

      const newTodo = { uid: genUid(), ...todo };
      const task = state.allTasks.find((t) => t.uid === taskUid);
      task.todos.push(newTodo);
    },
  },
});

const selectors = {
  selectAll: (state) => state.tasks.allTasks,
  selectByUid: (state, Uid) => state.tasks.allTasks.find((task) => task.uid === Uid),
};

export const tasksSlice = {
  ...slice,
  selectors,
};
