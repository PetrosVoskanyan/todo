import { Header } from '../components/header/index';
import { TaskList } from './taskList/task-list';

export const PageContent = ({ children }) => {

  return (
    <div>
      <Header />
      <div className="PageContainer">
        <TaskList />

        {children}
      </div>
    </div>
  );
};
