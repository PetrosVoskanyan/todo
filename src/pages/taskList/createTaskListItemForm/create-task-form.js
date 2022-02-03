import { useState } from 'react';
import avatar from '../../../assets/Images/img.png';
import { Button } from '@mui/material';
import { CreateTodoListItem } from '../../taskDetails/createTodoListItem/create-todo-list-item';
import { TodoList } from '../../taskDetails/todoList/todo-list';
import { useNavigate } from 'react-router-dom';
import genUid from 'light-uid';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';
import { useCreateTaskMutation } from '../../../store/sevices/tasks.service';

const useStyles = makeStyles((theme) => ({
  CreateTaskListItemForm: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(5),
    gap: theme.spacing(3),
  },
  CreateTaskListItem: {
    display: 'flex',
    gap: theme.spacing(2),
    borderBottom: '1px solid grey',
    padding: theme.spacing(2),
    width: theme.spacing(100),
  },
  InputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
  Input: {
    margin: 3,
    background: 'transparent',
    cursor: 'text',
    color: 'white',
    border: 'none',
    outline: 'none',
    fontSize: theme.spacing(2),
    fontWeight: 'bold',
  },
  ButtonContainer: {
    gap: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
    margin: [theme.spacing(6), theme.spacing(2)],
  },
}));

const DRAFT_TASK_LIST = {
  title: '',
  description: '',
  todos: [],
};


export const CreateTaskForm = () => {
  const classes = useStyles();
  const [createTask] = useCreateTaskMutation();
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
    createTask({ ...draftTask, uid: genUid() });
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

  const handleDeleteTodo = (uid) => {
    const draftTaskList = draftTask.todos.filter((t) => t.uid !== uid);
    setDraftTask({ ...draftTask, todos: draftTaskList });
  };

  const handleIsDoneChangeForTodo = ({ todoUid, isDone }) => {
    setDraftTask({
      ...draftTask,
      todos: draftTask.todos.map((todo) => (
        todo.uid === todoUid ? ({ ...todo, isDone }) : todo
      )),
    });
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
          <TodoList
            task={draftTask}
            onDelete={(uid) => handleDeleteTodo(uid)}
            onIsDoneChangeForTodo={handleIsDoneChangeForTodo}
          />
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
