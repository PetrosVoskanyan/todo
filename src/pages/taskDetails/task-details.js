import './task-details.models.scss';
import { TodoList } from './todoList/todo-list';
import { TaskInfo } from '../../components/task-info';
import { CreateTodoListItem } from './createTodoListItem/create-todo-list-item';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSlice } from '../../store';
import { useParams } from 'react-router-dom';
import PatchStyles from 'patch-styles';
import * as classes from './task-details.models.scss';

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
    <PatchStyles classNames={classes}>
      <div className="TaskDetails">
        <TaskInfo taskInfo={task} />
        <TodoList task={task} onDelete={(todoUid) => handleDeleteTodo(todoUid)} />
        <CreateTodoListItem onClick={(todo) => handleCreateTodo(todo)} />
      </div>
    </PatchStyles>
  );
};
