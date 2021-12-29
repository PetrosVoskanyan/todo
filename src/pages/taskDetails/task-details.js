import './task-details.scss';
import { TodoList } from './todoList/todo-list';
import { Taskinfo } from '../../components/task-info';
import { CreateTodoListItem } from './createTodoListItem/create-todo-list-item';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store';
import { selectTaskByIndex } from '../../store/selectors';

export const TaskDetails = ({ selectedTaskIndex }) => {
  const dispatch = useDispatch();
  const task = useSelector((state) => selectTaskByIndex(state, selectedTaskIndex));

  const handleDeleteTodo = (index) => {
    dispatch({
      type: actions.deleteTodo,
      payload: {
        taskIndex: selectedTaskIndex,
        todoIndex: index,
      },
    });
  };

  const handleCreateTodo = (name) => {
    dispatch({
      type: actions.createTodo,
      payload: {
        taskIndex: selectedTaskIndex,
        todo: name,
      },
    });
  };

  if (!task) {
    return;
  }

  return (
    <div className="TaskDetails">
      <Taskinfo taskInfo={task} />
      <TodoList tasksText={task} onDelete={(ind) => handleDeleteTodo(ind)} />
      <CreateTodoListItem handleClick={(task) => handleCreateTodo(task)} />
    </div>
  );
};
