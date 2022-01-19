import PatchStyles from 'patch-styles';
import * as classes from './checkbox.models.scss';
import ClearIcon from '@mui/icons-material/Clear';

export const Checkbox = ({ task, onDelete }) => {
  return (
    <PatchStyles classNames={classes}>
      <label className="CheckboxContainer">
        <input type="checkbox" hidden />
        <div className="Checkbox" />
        <span className="Text">{task}</span>
        <div
          className="IconContainer"
          onClick={() => onDelete()}
        >
          <ClearIcon
            className="remove"
            aria-label="delete"
          />
        </div>
      </label>
    </PatchStyles>
  );
};
