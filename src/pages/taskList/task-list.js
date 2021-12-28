import { TaskListItem } from './TaskListItem/task-list-item';
import './task-list.scss';
import { AddTaskListItem } from './addTaskListItem/add-task-list-item';

export const TaskList = ({ tasks, selected, onChange, onAdd, onRemove }) => {

  return (
    <div className="TaskList">
      <AddTaskListItem ChangePage={() => onAdd()} />
      {
        tasks.map((item, ind) => (
          <TaskListItem
            key={ind}
            task={item}
            onChangeSelected={() => onChange(ind)}
            active={ind === selected}
            onDelete={() => onRemove(ind)}
          />
        ))
      }
    </div>
  );
};
