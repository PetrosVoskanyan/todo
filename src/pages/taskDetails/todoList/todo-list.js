import { TodoListItem } from '../todoListItem/todo-list-item';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  TodoList: {
    margin: [theme.spacing(5), 0, 0, theme.spacing(5)],
  },
}));

export const TodoList = ({ task, onDelete, onIsDoneChangeForTodo }) => {
  const classes = useStyles();

  return (
    <PatchStyles classNames={classes}>
      <div className="TodoList">
        {
          task.todos?.map((item) => (
            <TodoListItem
              key={item.uid}
              todo={item}
              onDelete={() => onDelete(item.uid)}
              onIsDoneChange={onIsDoneChangeForTodo}
            />
          ))
        }
      </div>
    </PatchStyles>
  );
};
