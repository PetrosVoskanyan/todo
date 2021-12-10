import { TaskListItem } from './TaskListItem/task-list-item';
import './task-list.scss';

export const TaskList = ({ tasks, selected, onChange }) => {

  return (
    <div className="TaskList">
      {
        tasks.map((item, ind) => (
          <TaskListItem
            key={ind}
            task={item}
            onChangeSelected={() => onChange(ind)}
            active={ind === selected}
          />
        ))
      }
    </div>
  );
};
