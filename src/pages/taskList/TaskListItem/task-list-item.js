import './task-list-item.scss';
import { Taskinfo } from '../../../components/task-info';

export const TaskListItem = ({ task, onChangeSelected, active }) => {
  return (
    <div
      className={`TaskListItem ${active ? 'Active' : ''}`}
      onClick={() => onChangeSelected()}
    >
      <Taskinfo taskInfo={task} />
    </div>
  );
};
