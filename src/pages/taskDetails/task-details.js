import './task-details.scss';
import { TodoList } from './todoList/todo-list';
import { Taskinfo } from '../../components/task-info';
import { CreateTodoListItem } from './createTodoListItem/create-todo-list-item';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSlice } from '../../store';
import { useParams } from 'react-router-dom';

export const TaskDetails = () => {
  const dispatch = useDispatch();
  const { taskUid } = useParams();
  const task = useSelector((state) => tasksSlice.selectors.selectByUid(state, taskUid));

  const handleDeleteTodo = (todoUid) => {
    dispatch(tasksSlice.actions.deleteTodo({ taskUid, todoUid }));
  };

  const handleCreateTodo = (todo) => {
    dispatch(tasksSlice.actions.createTodo({ taskUid, todo }));
  };

  if (!task) {
    return null;
  }

  return (
    <div className="TaskDetails">
      <Taskinfo taskInfo={task} />
      <TodoList task={task} onDelete={(todoUid) => handleDeleteTodo(todoUid)} />
      <CreateTodoListItem onClick={(todo) => handleCreateTodo(todo)} />
    </div>
  );
};
