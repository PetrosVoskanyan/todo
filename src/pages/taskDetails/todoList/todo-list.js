import { TodoListItem } from '../todoListItem/todo-list-item';
import './to-do-list.scss';

export const TodoList = ({ tasksText, onDelete }) => {
  return (
    <div className="TodoList">
      {
        tasksText.todos.map((item, ind) => (
          <TodoListItem
            onDelete={() => onDelete(ind)}
            key={ind}
            taskInfo={item.name}
          />
        ))
      }
    </div>
  );
};
