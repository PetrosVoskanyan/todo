import { TaskListItem } from './TaskListItem/task-list-item';
import { AddTaskListItem } from './addTaskListItem/add-task-list-item';
import { useSelector } from 'react-redux';
import { tasksSlice } from '../../store';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  PageContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export const TaskList = () => {
  const classes = useStyles();
  const taskList = useSelector(tasksSlice.selectors.selectAll);

  return (
    <PatchStyles classNames={classes}>
      <div className="TaskList">
        <AddTaskListItem />
        {
          taskList.map((item) => (
            <TaskListItem
              key={item.uid}
              task={item}
              active={true}
            />
          ))
        }
      </div>
    </PatchStyles>
  );
};
