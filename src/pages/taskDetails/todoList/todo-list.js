import { TodoListItem } from '../todoListItem/todo-list-item';
import './to-do-list.scss';

export const TodoList = ({ task, onDelete }) => {
  return (
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
  );
};
