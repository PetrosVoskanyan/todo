import './task-details.scss';
import { TodoList } from './todoList/todo-list';
import { Taskinfo } from '../../components/task-info';
import { CreateTodoListItem } from './createTodoListItem/create-todo-list-item';

export const TaskDetails = ({ activeTask, onSave, onDelete }) => {

  return (
    <div className="TaskDetails">
      <Taskinfo taskInfo={activeTask} />
      <TodoList tasksText={activeTask} onDelete={(ind) => onDelete(ind)} />
      <CreateTodoListItem handleClick={(task) => onSave(task)} />
    </div>
  );
};
