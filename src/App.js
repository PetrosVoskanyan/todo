import { PageContent } from './pages/pageContent';
import { Route, Routes } from 'react-router-dom';
import { CreateTaskForm } from './pages/taskList/createTaskListItemForm/create-task-form';
import { TaskDetails } from './pages/taskDetails/task-details';
import { makeStyles } from '@mui/styles';
import PatchStyles from 'patch-styles';

const useStyles = makeStyles((theme) => ({
  AppRoot: {
    backgroundColor: theme.palette.primary.light,
    height: '100%',
  },
}));


function App() {
  const classes = useStyles();

  return (
    <PatchStyles classNames={classes}>
      <div className="AppRoot">
        <PageContent>
          <Routes>
            <Route path="/create" element={<CreateTaskForm />} />
            <Route path="/:taskUid" element={<TaskDetails />} />
          </Routes>
        </PageContent>
      </div>
    </PatchStyles>
  );
}

export default App;
