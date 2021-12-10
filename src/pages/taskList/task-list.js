import { TaskListItem } from './TaskListItem/task-list-item';
import './task-list.scss';

export const TaskList = ({ tasks }) => {

  return (
    <div className="TaskList">
      {
        tasks.map((item) => (
          <TaskListItem
            task={item}
          />
        ))
      }
    </div>
  );
};
