import { TaskInfo } from '../../../components/task-info';
import ClearIcon from '@mui/icons-material/Clear';
import { tasksSlice } from '../../../store';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  TaskListItem: {
    background: theme.palette.primary.main,
    width: theme.spacing(53),
    borderRadius: theme.spacing(3),
    margin: theme.spacing(3),
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    position: 'relative',
    textDecoration: 'none',

    '&.active': {
      border: '1px solid #383B41',
    },
  },
  remove: {
    color: 'white',
    position: 'absolute',
    margin: theme.spacing(1),
    top: 0,
    right: 0,
    textDecoration: 'none',
  },
}));

export const TaskListItem = ({ task }) => {
  const classes = useStyles();
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
      className={({ isActive }) => clsx(classes.TaskListItem, { [classes.active]: isActive })}
    >
      <ClearIcon
        className={classes.remove}
        aria-label="delete"
        onClick={handleDeleteTask}
      />
      <TaskInfo taskInfo={task} />
    </NavLink>
  );
};
