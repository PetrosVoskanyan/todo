import { TaskListItem } from './TaskListItem/task-list-item';
import './task-list.scss';
import { AddTaskListItem } from './addTaskListItem/add-task-list-item';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSlice } from '../../store';

export const TaskList = ({ selectedTaskIndex, onChange, onAdd }) => {
  const dispatch = useDispatch();
  const taskList = useSelector(tasksSlice.selectors.selectAll);

  const handleDeleteTask = (index) => {
    dispatch(tasksSlice.actions.deleteTask(index));
  };

  return (
    <div className="TaskList">
      <AddTaskListItem ChangePage={() => onAdd()} />
      {
        taskList.map((item, ind) => (
          <TaskListItem
            key={ind}
            task={item}
            onChangeSelected={() => onChange(ind)}
            active={ind === selectedTaskIndex}
            onDelete={() => handleDeleteTask(ind)}
          />
        ))
      }
    </div>
  );
};
