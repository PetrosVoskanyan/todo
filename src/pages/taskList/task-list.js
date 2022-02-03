import { TaskListItem } from './TaskListItem/task-list-item';
import { AddTaskListItem } from './addTaskListItem/add-task-list-item';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';
import { useFetchTaskListQuery } from '../../store/sevices/tasks.service';

const useStyles = makeStyles(() => ({
  PageContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export const TaskList = () => {
  const classes = useStyles();
  const { data: taskList } = useFetchTaskListQuery(null, {
    selectFromResult: ({ data, ...otherInfo }) => ({
      data: data && Object.values(data),
      ...otherInfo,
    }),
  });

  return (
    <PatchStyles classNames={classes}>
      <div className="TaskList">
        <AddTaskListItem />
        {
          taskList?.map((item) => (
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
