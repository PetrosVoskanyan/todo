import { Checkbox } from '../../../components/checkbox';
import PatchStyles from 'patch-styles';
import * as classes from './todo-list-item.models.scss';

export const TodoListItem = ({ taskInfo, onDelete }) => {

  return (
    <PatchStyles classNames={classes}>
      <div className="TodoListItem">
        <Checkbox
          task={taskInfo}
          onDelete={() => onDelete()}
        />
      </div>
    </PatchStyles>
  );
};
