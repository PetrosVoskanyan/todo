import { useState } from 'react';
import { Header } from '../components/header/index';
import { TaskDetails } from './taskDetails/task-details';
import { TaskList } from './taskList/task-list';
import { CreateTaskListItemForm } from './taskList/createTaskListItemForm/create-task-list-item-form';

export const PageContent = () => {
  const [selectedTask, setSelectedTask] = useState(0);
  const [isAddMode, setIsAddMode] = useState(false);

  const selectedTaskChange = (index) => {
    setSelectedTask(index);
    setIsAddMode(false);
  };

  const CloseAddMode = () => {
    setIsAddMode(!isAddMode);
  };

  return (
    <div>
      <Header />
      <div className="PageContainer">
        <TaskList
          onAdd={() => CloseAddMode()}
          selectedTaskIndex={selectedTask}
          onChange={(ind) => selectedTaskChange(ind)}
        />
        {
          !isAddMode ? (
              <TaskDetails selectedTaskIndex={selectedTask} />
          ) : (
            <CreateTaskListItemForm onClose={() => CloseAddMode()} />
          )
        }
      </div>
    </div>
  );
};
