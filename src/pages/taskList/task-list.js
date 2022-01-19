import { TaskListItem } from './TaskListItem/task-list-item';
import { AddTaskListItem } from './addTaskListItem/add-task-list-item';
import { useSelector } from 'react-redux';
import { tasksSlice } from '../../store';
import PatchStyles from 'patch-styles';
import * as classes from './task-list.models.scss';

export const TaskList = () => {
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
