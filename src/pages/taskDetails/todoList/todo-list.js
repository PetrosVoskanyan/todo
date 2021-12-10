import { TodoListItem } from '../todoListItem/todo-list-item';
import './to-do-list.scss';

export const TodoList = ({ tasksText }) => {
  return (
    <div className="TodoList">
      {
        tasksText.todos.map((item) => (
          <TodoListItem taskInfo={item.name} />
        ))
      }
    </div>
  );
};
