import './task-details.scss';
import { TodoList } from './todoList/todo-list';
import { Taskinfo } from '../../components/task-info';
import { CreateTodoListItem } from './createTodoListItem/create-todo-list-item';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSlice } from '../../store';

export const TaskDetails = ({ selectedTaskIndex }) => {
  const dispatch = useDispatch();
  const task = useSelector((state) => tasksSlice.selectors.selectByIndex(state, selectedTaskIndex));

  const handleDeleteTodo = (index) => {
    dispatch(tasksSlice.actions.deleteTodo({
      taskIndex: selectedTaskIndex,
      todoIndex: index,
    }));
  };

  const handleCreateTodo = (name) => {
    dispatch(tasksSlice.actions.createTodo({
      taskIndex: selectedTaskIndex,
      todo: name,
    }));
  };

  if (!task) {
    return null;
  }

  return (
    <div className="TaskDetails">
      <Taskinfo taskInfo={task} />
      <TodoList tasksText={task} onDelete={(ind) => handleDeleteTodo(ind)} />
      <CreateTodoListItem handleClick={(task) => handleCreateTodo(task)} />
    </div>
  );
};
