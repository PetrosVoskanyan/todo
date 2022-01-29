import PatchStyles from 'patch-styles';
import ClearIcon from '@mui/icons-material/Clear';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  CheckboxContainer: {
    display: 'flex',
    gap: theme.spacing(1),
  },
  Text: {
    color: 'white',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: theme.spacing(2),
    lineHeight: theme.spacing(2.5),
  },
  Checkbox: {
    border: '1.5px solid #B4B4B4',
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: theme.spacing(1),
    display: 'flex',
    cursor: 'pointer',
  },
  IconContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: theme.spacing(7.5),
  },
  remove: {
    cursor: 'pointer',
    color: 'white',
  },
}));

export const Checkbox = ({ task, onDelete }) => {
  const classes = useStyles();

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
