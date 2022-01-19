import { Component } from 'react';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import './add-task-list-item.models.scss';
import { Link } from 'react-router-dom';
import PatchStyles from 'patch-styles';
import * as classes from './add-task-list-item.models.scss';

export class AddTaskListItem extends Component {
  render() {
    return (
      <PatchStyles classNames={classes}>
        <Link
          to="/create"
          className="AddTaskListItem"
        >
          <AddCircleRoundedIcon className="Add" />
          <h1 className="AddText">Add a doit</h1>
        </Link>
      </PatchStyles>
    );
  }
}
