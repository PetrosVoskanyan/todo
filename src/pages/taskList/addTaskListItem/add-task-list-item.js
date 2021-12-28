import { Component } from 'react';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import "./add-task-list-item.scss"

export class AddTaskListItem extends Component {
  render() {
    return (
      <div
        className="AddTaskListItem"
        onClick={() => this.props.ChangePage()}
      >

        <AddCircleRoundedIcon className="Add"/>
        <h1 className="AddText">Add a doit</h1>
      </div>
    )
  }
}
