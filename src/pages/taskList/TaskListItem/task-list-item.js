import './task-list-item.scss';
import { Taskinfo } from '../../../components/task-info';
import ClearIcon from '@mui/icons-material/Clear';
import { tasksSlice } from '../../../store';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

export const TaskListItem = ({ task, index }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteTask = (ev) => {
    ev.preventDefault();
    dispatch(tasksSlice.actions.deleteTask(index));
    navigate('/');
  };

  return (
    <NavLink
      to={`/${index}`}
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
