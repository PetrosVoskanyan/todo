import './to-do-list-item.scss';
import { Checkbox } from '../../../components/checkbox';

export const TodoListItem = ({ taskInfo }) => {

  return (
    <div className="TodoListItem">
      <Checkbox task={taskInfo}/>
    </div>
  );
};
