import './task-list-item.scss';
import { Taskinfo } from '../../../components/task-info';

export const TaskListItem = ({ task }) => {
  return (
    <div className="TaskListItem">
      <Taskinfo taskInfo={task} />
    </div>
  );
};
