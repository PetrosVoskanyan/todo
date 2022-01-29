import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { Link } from 'react-router-dom';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  AddTaskListItem: {
    width: theme.spacing(53),
    height: theme.spacing(15),
    borderRadius: theme.spacing(2),
    margin: theme.spacing(3),
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
    border: '1px solid #383B41',
    textDecoration: 'none',
  },

  Add: {
    color: 'white',
    width: theme.spacing(8),
    height: theme.spacing(8),
    margin: [theme.spacing(3), theme.spacing(2)],
  },

  AddText: {
    color: theme.palette.text.secondary,
    fontWeight: 'bold',
    fontSize: theme.spacing(3),
    lineHeight: theme.spacing(4),
    padding: [theme.spacing(3), theme.spacing(0)],
  },
}));

export const AddTaskListItem = () => {
  const classes = useStyles();

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
};
