import { Component } from 'react';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import './add-task-list-item.scss';
import { Link } from 'react-router-dom';

export class AddTaskListItem extends Component {
  render() {
    return (
      <Link
        to="/create"
        className="AddTaskListItem"
      >
        <AddCircleRoundedIcon className="Add" />
        <h1 className="AddText">Add a doit</h1>
      </Link>
    );
  }
}
