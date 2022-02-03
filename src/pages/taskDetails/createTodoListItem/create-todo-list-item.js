import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  CreateTodoListItem: {
    padding: theme.spacing(0.8),
    margin: [0, 0, 0, theme.spacing(5)],
    display: 'flex',
    gridGap: theme.spacing(1),
    gap: theme.spacing(1),
  },

  CreateContainer: {
    display: 'flex',
    gap: theme.spacing(1),
  },

  CreateButton: {
    color: 'white',
    width: theme.spacing(3),
    height: theme.spacing(3),
    gridGap: theme.spacing(0.8),
    gap: theme.spacing(0.8),
    cursor: 'pointer',
    alignContent: 'center',
    justifyContent: 'center',
  },

  AddText: {
    color: 'white',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: theme.spacing(2),
    lineHeight: theme.spacing(2.4),
  },

  TaskInput: {
    background: 'transparent',
    cursor: 'text',
    color: 'white',
    border: 'none',
    outline: 'none',
  },
}));

export const CreateTodoListItem = ({ onClick }) => {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState('');

  const toggleChangeMode = () => {
    setToggle(!toggle);
  };

  const toggleEditMode = () => {
    onClick({ name });
    toggleChangeMode();
  };

  const toggleAddMod = (ev) => {
    const text = ev.target.value;
    setName(text);
  };

  return (
    <PatchStyles classNames={classes}>
      <div className="CreateTodoListItem">
        {
          toggle ? (
            <input
              className="TaskInput"
              type="text"
              onBlur={() => toggleEditMode()}
              onChange={(ev) => toggleAddMod(ev)}
              autoFocus
            />
          ) : (
            <label className="CreateContainer">
              <FontAwesomeIcon className="CreateButton" icon={faPlusSquare} onClick={() => toggleChangeMode()} />
              <span className="AddText">Add todo item</span>
            </label>
          )
        }
      </div>
    </PatchStyles>
  );
};
