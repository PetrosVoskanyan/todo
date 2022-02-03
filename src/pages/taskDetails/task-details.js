import { TodoList } from './todoList/todo-list';
import { TaskInfo } from '../../components/task-info';
import { CreateTodoListItem } from './createTodoListItem/create-todo-list-item';
import { useParams } from 'react-router-dom';
import {
  useChangeIsDoneMutation, useCreateTodoMutation, useDeleteTodoMutation, useFetchTaskListQuery,
} from '../../store/sevices/tasks.service';
import genUid from 'light-uid';

export const TaskDetails = () => {
  const [createTodo] = useCreateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const { taskUid } = useParams();
  const [changeIsDone] = useChangeIsDoneMutation();

  const { data: task } = useFetchTaskListQuery(null, {
    selectFromResult: ({ data, ...otherInfo }) => ({
      data: data && ({
        ...data[taskUid],
        todos: Array.from(Object.values(data[taskUid].todos ?? {})),
      }),
      ...otherInfo,
    }),
  });

  const handleDeleteTodo = (todoUid) => {
    deleteTodo({ taskUid, todoUid });
  };

  const handleIsDoneChangeForTodo = ({ todoUid, isDone }) => {
    changeIsDone({ taskUid, todoUid, isDone });
  };

  const handleCreateTodo = (todo) => {
    createTodo({
      taskUid, todo: {
        uid: genUid(),
        name: todo.name,
        isDone: false,
      },
    });
  };

  if (!task) {
    return null;
  }

  return (
    <div className="TaskDetails">
      <TaskInfo taskInfo={task} />
      <TodoList
        task={task}
        onDelete={(todoUid) => handleDeleteTodo(todoUid)}
        onIsDoneChangeForTodo={handleIsDoneChangeForTodo}
      />
      <CreateTodoListItem onClick={(todo) => handleCreateTodo(todo)} />
    </div>
  );
};
