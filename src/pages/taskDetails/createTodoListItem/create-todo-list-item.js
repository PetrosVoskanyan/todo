import { Component } from 'react';
import './create-todo-list-item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faPlusSquare} from '@fortawesome/free-solid-svg-icons'

export class CreateTodoListItem extends Component {

  state = {
    isDone: false,
    name: ""
  };

  render() {
    return (
      <div className="CreateTodoListItem">
        {
          this.state.isDone ? (
            <input
              className="TaskInput"
              type="text"
              onBlur={() => this.toggleEditMod()}
              onChange={(ev) => this.toggleAddMod(ev)}
              autoFocus
            />
          ) : (
            <label className="CreateContainer">
                <FontAwesomeIcon className="CreateButton" icon={faPlusSquare} onClick={() => this.toggleFstxMod()}/>
              <span className="AddText">Add todo item</span>
            </label>
          )
        }
      </div>
    );
  }

  toggleFstxMod = () => {
    this.setState({
      isDone: !this.state.isDone,
    });
  }

  toggleEditMod = () => {
    this.props.handleClick(this.state)

    this.setState({
      isDone: !this.state.isDone,
    });
  }

  toggleAddMod = (ev) => {
      const text = ev.target.value;

    this.setState({
      name: text,
    });
  }
}
