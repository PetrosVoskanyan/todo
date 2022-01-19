import { useState } from 'react';
import avatar from '../../../assets/Images/img.png';
import './create-task-list-item-form.models.scss';
import { Button } from '@mui/material';
import { CreateTodoListItem } from '../../taskDetails/createTodoListItem/create-todo-list-item';
import { TodoList } from '../../taskDetails/todoList/todo-list';
import { useDispatch } from 'react-redux';
import { tasksSlice } from '../../../store';
import { useNavigate } from 'react-router-dom';
import genUid from 'light-uid';
import PatchStyles from 'patch-styles';
import * as classes from './create-task-list-item-form.models.scss';


const DRAFT_TASK_LIST = {
  title: '',
  description: '',
  todos: [],
};


export const CreateTaskListItemForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [draftTask, setDraftTask] = useState(DRAFT_TASK_LIST);

  const descriptionAddMode = (ev) => {
    const text = ev.target.value;

    setDraftTask({ ...draftTask, description: text });
  };

  const titleAddMode = (ev) => {
    const text = ev.target.value;

    setDraftTask({ ...draftTask, title: text });
  };

  const handleClose = () => navigate('/');

  const handleSaveTask = (task) => {
    setDraftTask({ ...draftTask, todos: [...draftTask.todos, { uid: genUid(), ...task }] });
  };

  const saveItem = () => {
    dispatch(tasksSlice.actions.createTask(draftTask));
    handleClose();
  };

  const onKeyUp = (ev) => {
    if (ev.key === 'Enter') {
      saveItem();
    }

    if (ev.key === 'Escape') {
      handleClose();
    }
  };

  const onDeleteTodo = (uid) => {
    const draftTaskList = draftTask.todos.filter((t) => t.uid !== uid);
    setDraftTask({ ...draftTask, todos: draftTaskList });
  };

  return (
    <PatchStyles classNames={classes}>
      <div
        className="CreateTaskListItemForm"
        onKeyDown={(ev) => onKeyUp(ev)}
      >
        <div className="CreateTaskListItem">
          <div className="Avatar">
            <img width={60} height={60} src={avatar} alt="avatar" />
          </div>
          <div className="InputContainer">
            <input
              placeholder="give a name to your doit"
              type="text"
              className="Input"
              onChange={(ev) => titleAddMode(ev)}
              maxLength={25}
            />
            <input
              placeholder="tell a bit about your doit"
              type="text"
              className="Input"
              onChange={(ev) => descriptionAddMode(ev)}
            />
          </div>
        </div>
        <div>
          <TodoList task={draftTask} onDelete={(uid) => onDeleteTodo(uid)} />
          <CreateTodoListItem onClick={(task) => handleSaveTask(task)} />
        </div>
        <div className="ButtonContainer">
          <Button
            variant="text"
            color="success"
            onClick={() => handleClose()}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            color="success"
            disabled={!draftTask.title || !draftTask.description}
            onClick={(ev) => saveItem(ev)}
          >
            Save
          </Button>
        </div>
      </div>
    </PatchStyles>
  );
};
