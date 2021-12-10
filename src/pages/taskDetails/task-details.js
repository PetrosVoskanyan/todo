import './task-details.scss';
import { TodoList } from './todoList/todo-list';
import { Taskinfo } from '../../components/task-info';

export const TaskDetails = ({ activeTask, tasks }) => {

  return (
    <div className="TaskDetails">
      <Taskinfo taskInfo={activeTask} />
      <TodoList tasksText={tasks} />
    </div>
  );
};
