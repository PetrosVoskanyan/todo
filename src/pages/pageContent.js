import { Header } from '../components/header/index';
import { TaskList } from './taskList/task-list';
import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  PageContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

export const PageContent = ({ children }) => {
  const classes = useStyles();

  return (
    <PatchStyles classNames={classes}>
      <div>
        <Header />
        <div className="PageContainer">
          <TaskList />

          {children}
        </div>
      </div>
    </PatchStyles>
  );
};
