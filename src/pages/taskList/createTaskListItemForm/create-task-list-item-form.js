import { useState } from 'react';
import avatar from '../../../assets/Images/img.png';
import './create-task-list-item-form.scss';
import { Button } from '@mui/material';
import { CreateTodoListItem } from '../../taskDetails/createTodoListItem/create-todo-list-item';
import { TodoList } from '../../taskDetails/todoList/todo-list';

const DRAFT_TASK_LIST = {
  title: '',
  description: '',
  todos: [],
};


export const CreateTaskListItemForm = ({ onTaskSave, onAddMode }) => {

  const [draftTask, setDraftTask] = useState(DRAFT_TASK_LIST);

  const descriptionAddMod = (ev) => {
    const text = ev.target.value;

    setDraftTask({ ...draftTask, description: text });
  };

  const titleAddMod = (ev) => {
    const text = ev.target.value;

    setDraftTask({ ...draftTask, title: text });
  };

  const handleSaveTask = (task) => {
    setDraftTask({ ...draftTask, todos: [...draftTask.todos, task] });
  };

  const SaveItem = () => {
    onTaskSave(draftTask);
  };

  const onKeyUp = (ev) => {
    if (ev.key === 'Enter') {
      SaveItem();
    }

    if (ev.key === 'Escape') {
      onAddMode();
    }
  };

  const onDeleteTodo = (ind) => {
    const draftTaskList = draftTask.todos;
    draftTaskList.splice(ind, 1);
    setDraftTask({ ...draftTask, todos: draftTaskList });
  };
  return (
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
            onChange={(ev) => titleAddMod(ev)}
            maxLength={25}
          />
          <input
            placeholder="tell a bit about your doit"
            type="text"
            className="Input"
            onChange={(ev) => descriptionAddMod(ev)}
          />
        </div>
      </div>
      <div>
        <TodoList tasksText={draftTask} onDelete={(ind) => onDeleteTodo(ind)} />
        <CreateTodoListItem handleClick={(task) => handleSaveTask(task)} />
      </div>
      <div className="ButtonContainer">
        <Button
          variant="text"
          color="success"
          onClick={() => onAddMode()}
        >
          Cancel
        </Button>
        <Button
          variant="outlined"
          color="success"
          onClick={(ev) => SaveItem(ev)}>
          Save
        </Button>
      </div>
    </div>
  );
};
