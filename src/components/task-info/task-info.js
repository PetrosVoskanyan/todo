import PatchStyles from 'patch-styles';
import avatar from '../../assets/Images/img.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  TaskInfo: {
    margin: theme.spacing(5),
  },
  PersonInfo: {
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(2),
    justifyContent: 'center',
  },
  PersonInfoText: {
    display: 'flex',
    flexDirection: 'column',
},
TodoText: {
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: theme.spacing(3),
  lineHeight: theme.spacing(4),
  textDecoration: 'none',
  color: theme.palette.text.secondary,
},
TodoTextInfo: {
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: theme.spacing(1.5),
  lineHeight: theme.spacing(2),
  textDecoration: 'none',
  color: theme.palette.text.secondary,
  opacity: 0.5,
},
}));

export const TaskInfo = ({ taskInfo }) => {
  const classes = useStyles();

  return (
    <PatchStyles classNames={classes}>
      <div className="TaskInfo">
        <div className="PersonInfo">
          <img width={60} height={60} src={avatar} alt="avatar" />
          <div className="PersonInfoText">
            <span className="TodoText">{taskInfo.title}</span>
            <span className="TodoTextInfo">{taskInfo.description}</span>
          </div>
        </div>
      </div>
    </PatchStyles>
  );
};
