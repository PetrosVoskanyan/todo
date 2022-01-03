import { TaskListItem } from './TaskListItem/task-list-item';
import './task-list.scss';
import { AddTaskListItem } from './addTaskListItem/add-task-list-item';
import { useSelector } from 'react-redux';
import { tasksSlice } from '../../store';

export const TaskList = () => {
  const taskList = useSelector(tasksSlice.selectors.selectAll);

  return (
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
  );
};
