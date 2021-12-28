import { useState } from 'react';
import './create-todo-list-item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

export const CreateTodoListItem = ({ handleClick }) => {

  const [isDone, setIsDone] = useState(false);
  const [name, setName] = useState('');

  const toggleChangeMode = () => {
    setIsDone(!isDone);
  };

  const toggleEditMode = () => {
    handleClick({ isDone, name });
    toggleChangeMode();
  };

  const toggleAddMod = (ev) => {
    const text = ev.target.value;
    setName(text);
  };

  return (
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
  );
};
