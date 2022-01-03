import './task-details.scss';
import { TodoList } from './todoList/todo-list';
import { Taskinfo } from '../../components/task-info';
import { CreateTodoListItem } from './createTodoListItem/create-todo-list-item';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSlice } from '../../store';
import { useParams } from 'react-router-dom';

export const TaskDetails = () => {
  const dispatch = useDispatch();
  const { taskIndex } = useParams();
  const task = useSelector((state) => tasksSlice.selectors.selectByIndex(state, taskIndex));

  const handleDeleteTodo = (todoIndex) => {
    dispatch(tasksSlice.actions.deleteTodo({ taskIndex, todoIndex }));
  };

  const handleCreateTodo = (name) => {
    dispatch(tasksSlice.actions.createTodo({ taskIndex, todo: name }));
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
