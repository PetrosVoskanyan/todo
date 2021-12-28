import { Component } from 'react';
import avatar from '../../../assets/Images/img.png';
import './create-task-list-item-form.scss';
import { Button } from '@mui/material';
import { CreateTodoListItem } from '../../taskDetails/createTodoListItem/create-todo-list-item';
import { TodoList } from '../../taskDetails/todoList/todo-list';


export class CreateTaskListItemForm extends Component {

  state = {
    title: '',
    description: '',
    todos: [],
  };

  render() {
    return (
      <div
        className="CreateTaskListItemForm"
        onKeyDown={(ev) => this.onKeyUp(ev)}
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
              onChange={(ev) => this.titleAddMod(ev)}
              maxLength={25}
            />
            <input
              placeholder="tell a bit about your doit"
              type="text"
              className="Input"
              onChange={(ev) => this.descriptionAddMod(ev)}
            />
          </div>
        </div>
        <div>
          <TodoList tasksText={this.state} onDelete={(ind) => this.onDeleteTodo(ind)}/>
          <CreateTodoListItem handleClick={(task) => this.handleSaveTask(task)} />
        </div>
        <div className="ButtonContainer">
          <Button
            variant="text"
            color="success"
            onClick={() => this.props.onAddMode()}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={(ev) => this.SaveItem(ev)}>
            Save
          </Button>
        </div>
      </div>
    );
  }

  descriptionAddMod = (ev) => {
    const text = ev.target.value;

    this.setState({
      description: text,
    });
  };

  titleAddMod = (ev) => {
    const text = ev.target.value;

    this.setState({
      title: text,
    });
  };

  handleSaveTask(task) {
    this.setState({
      todos: [
        ...this.state.todos,
        task,
      ],
    });
  }

  SaveItem() {
    this.props.onTaskSave(this.state)
  }

  onKeyUp = (ev) => {
    if(ev.key === "Enter") {
      this.SaveItem();
    }

    if(ev.key === "Escape") {
      this.props.onAddMode()
    }
  }

  onDeleteTodo(ind) {
    const draftTaskList = this.state.todos;
    draftTaskList.splice(ind,1);

    this.setState({
      todos: draftTaskList,
    });
  }
}
