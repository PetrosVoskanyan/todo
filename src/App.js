import './App.scss';
import { PageContent } from './pages/pageContent';
import { Route, Routes } from 'react-router-dom';
import { CreateTaskListItemForm } from './pages/taskList/createTaskListItemForm/create-task-list-item-form';
import { TaskDetails } from './pages/taskDetails/task-details';

function App() {
  return (
    <div className="App">

      <PageContent>
        <Routes>
          <Route path="/create" element={<CreateTaskListItemForm />} />
          <Route path="/:taskIndex" element={<TaskDetails />} />
        </Routes>
      </PageContent>
    </div>
  );
}

export default App;
