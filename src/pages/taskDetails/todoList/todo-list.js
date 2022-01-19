import { TodoListItem } from '../todoListItem/todo-list-item';
import PatchStyles from 'patch-styles';
import * as classes from './todo-list.models.scss';

export const TodoList = ({ task, onDelete }) => {
  return (
    <PatchStyles classNames={classes}>
      <div className="TodoList">
        {
          task.todos.map((item) => (
            <TodoListItem
              onDelete={() => onDelete(item.uid)}
              key={item.uid}
              taskInfo={item.name}
            />
          ))
        }
      </div>
    </PatchStyles>
  );
};
