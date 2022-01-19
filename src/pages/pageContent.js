import { Header } from '../components/header/index';
import { TaskList } from './taskList/task-list';
import PatchStyles from 'patch-styles';
import * as classes from './pageContent.models.scss';

export const PageContent = ({ children }) => {

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
