import './task-list-item.scss';
import { Taskinfo } from '../../../components/task-info';
import ClearIcon from '@mui/icons-material/Clear';

export const TaskListItem = ({ task, onChangeSelected, active, onDelete }) => {
  return (
    <div
      className={`TaskListItem ${active ? 'Active' : ''}`}
      onClick={() => onChangeSelected()}
    >
      <ClearIcon
        className="remove"
        aria-label="delete"
        onClick={() => onDelete()}
      />
      <Taskinfo taskInfo={task} />
    </div>
  );
};
