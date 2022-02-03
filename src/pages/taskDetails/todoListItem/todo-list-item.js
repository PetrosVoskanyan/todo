import PatchStyles from 'patch-styles';
import { Checkbox, FormControlLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  TodoListItem: {
    gap: theme.spacing(0.8),
    padding: theme.spacing(0.8),
    color: 'white',
    display: 'flex',
  },
  IconContainer: {
    margin: theme.spacing(1.2),
    display: 'flex',
    justifyContent: 'flex-end',
    width: theme.spacing(6.5),
  },
  remove: {
    cursor: 'pointer',
    color: 'white',
  },
}));

export const TodoListItem = ({ todo, onIsDoneChange }) => {
  const classes = useStyles();

  const handleChange = (ev) => {
    const isDone = ev.target.checked;
    onIsDoneChange({ todoUid: todo.uid, isDone });
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="TodoListItem">
        <FormControlLabel control={
          <Checkbox
            checked={todo.isDone}
            onChange={handleChange}
          />
        } label={todo.name}
        />
      </div>
    </PatchStyles>
  );
};
