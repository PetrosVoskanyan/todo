import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import PatchStyles from 'patch-styles';
import * as classes from './create-todo-list-item.models.scss';

export const CreateTodoListItem = ({ onClick }) => {
  const [isDone, setIsDone] = useState(false);
  const [name, setName] = useState('');

  const toggleChangeMode = () => {
    setIsDone(!isDone);
  };

  const toggleEditMode = () => {
    onClick({ isDone, name });
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
          isDone ? (
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
