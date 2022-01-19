import './task-list-item.models.scss';
import { TaskInfo } from '../../../components/task-info';
import ClearIcon from '@mui/icons-material/Clear';
import { tasksSlice } from '../../../store';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import * as classes from './task-list-item.models.scss';

export const TaskListItem = ({ task }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteTask = (ev) => {
    ev.preventDefault();
    dispatch(tasksSlice.actions.deleteTask(task.uid));
    navigate('/');
  };

  return (
      <NavLink
        to={`/${task.uid}`}
        className={({ isActive }) => clsx(classes.TaskListItem, { [classes.Active]: isActive })}
      >
        <ClearIcon
          className='remove'
          aria-label="delete"
          onClick={handleDeleteTask}
        />
        <TaskInfo taskInfo={task} />
      </NavLink>
  );
};
