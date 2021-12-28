import './to-do-list-item.scss';
import { Checkbox } from '../../../components/checkbox';

export const TodoListItem = ({ taskInfo, onDelete}) => {

  return (
    <div className="TodoListItem">
      <Checkbox
        task={taskInfo}
        onDelete={() => onDelete()}
      />
    </div>
  );
};
