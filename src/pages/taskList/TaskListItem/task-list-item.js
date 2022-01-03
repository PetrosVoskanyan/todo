import './task-list-item.scss';
import { Taskinfo } from '../../../components/task-info';
import ClearIcon from '@mui/icons-material/Clear';
import { tasksSlice } from '../../../store';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

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
      className={({ isActive }) => clsx('TaskListItem', { Active: isActive })}
    >
      <ClearIcon
        className="remove"
        aria-label="delete"
        onClick={handleDeleteTask}
      />
      <Taskinfo taskInfo={task} />
    </NavLink>
  );
};
