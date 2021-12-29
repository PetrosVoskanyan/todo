import { configureStore } from '@reduxjs/toolkit';

const getInitialState = () => {
  return {
    taskList: JSON.parse(localStorage.getItem('tasks-storage-key')) ?? [],
  };
};

export const actions = {
  deleteTask: 'DELETE_TASK',
  createTask: 'CREATE_TASK',
  deleteTodo: 'DELETE_TODO',
  createTodo: 'CREATE_TODO',
};

export const store = configureStore({
  reducer: (state, action) => {
    if (!state) {
      return getInitialState();
    }

    switch (action.type) {
      case actions.deleteTask: {
        const index = action.payload;
        const newTaskList = [...state.taskList];
        newTaskList.splice(index, 1);

        // localStorage.setItem('tasks-storage-key', JSON.stringify(draftTaskList));

        return {
          ...state,
          taskList: newTaskList,
        };
      }

      case actions.createTask: {
        const newTask = action.payload;
        const newTaskList = [newTask, ...state.taskList];

        // localStorage.setItem('tasks-storage-key', JSON.stringify(newTaskList));

        return {
          ...state,
          taskList: newTaskList,
        };
      }

      case actions.deleteTodo: {
        const { taskIndex, todoIndex } = action.payload;
        const newTaskList = [...state.taskList];
        newTaskList[taskIndex].todos.splice(todoIndex, 1);

        //localStorage.setItem('tasks-storage-key', JSON.stringify(draftTaskList));

        return {
          ...state,
          taskList: newTaskList,
        };
      }

      case actions.createTodo: {
        const { taskIndex, todo } = action.payload;
        const newTaskList = [...state.taskList];
        newTaskList[taskIndex].todos = [...newTaskList[taskIndex].todos, todo];

        //localStorage.setItem('tasks-storage-key', JSON.stringify(draftTaskList));

        return {
          ...state,
          taskList: newTaskList,
        };
      }

      default:
        return state;
    }
  },
});
