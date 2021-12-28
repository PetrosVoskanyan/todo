import { useState } from 'react';
import { Header } from '../components/header/index';
import { TaskDetails } from './taskDetails/task-details';
import { TaskList } from './taskList/task-list';
import { CreateTaskListItemForm } from './taskList/createTaskListItemForm/create-task-list-item-form';

const TASKS_LIST_STORAGE_KEY = 'tasks-storage-key';

export const PageContent = () => {

  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem(TASKS_LIST_STORAGE_KEY)) ?? []);
  const [selectedTask, setSelectedTask] = useState(0);
  const [isAddMode, setIsAddMode] = useState(false);

  const selectedTaskChange = (index) => {
    setSelectedTask(index);
    setIsAddMode(false);
  };

  const ChangeAddMode = () => {
    setIsAddMode(!isAddMode);
  };

  const handleSaveTodo = (todo) => {

    const draftTaskList = [...taskList];
    draftTaskList[selectedTask].todos.push(todo);
    localStorage.setItem(TASKS_LIST_STORAGE_KEY, JSON.stringify(draftTaskList));

    setTaskList(draftTaskList);
  };

  const handleSaveTask = (task) => {
    const newTaskList = [task, ...taskList];
    localStorage.setItem(TASKS_LIST_STORAGE_KEY, JSON.stringify(newTaskList));
    setTaskList(newTaskList);
    setIsAddMode(false);
  };

  const onDeleteTask = (ind) => {
    const draftTaskList = taskList;
    draftTaskList.splice(ind, 1);
    localStorage.setItem(TASKS_LIST_STORAGE_KEY, JSON.stringify(draftTaskList));
    setTaskList(draftTaskList);
  };

  const onDeleteTodo = (ind) => {
    const draftTaskList = taskList;
    draftTaskList[selectedTask].todos.splice(ind, 1);
    localStorage.setItem(TASKS_LIST_STORAGE_KEY, JSON.stringify(draftTaskList));
    setTaskList(draftTaskList);
  };

  return (
    <div>
      <Header />
      <div className="PageContainer">
        <TaskList
          onRemove={(ind) => onDeleteTask(ind)}
          onAdd={() => ChangeAddMode()}
          tasks={taskList}
          selected={selectedTask}
          onChange={(ind) => selectedTaskChange(ind)}
        />
        {
          !isAddMode ? (
            taskList[selectedTask] &&
            (
              <TaskDetails
                onDelete={(ind) => onDeleteTodo(ind)}
                activeTask={taskList[selectedTask]}
                onSave={(todo) => handleSaveTodo(todo)}
              />
            )
          ) : (
            <CreateTaskListItemForm
              onTaskSave={(task) => handleSaveTask(task)}
              onAddMode={() => ChangeAddMode()}
            />
          )
        }
      </div>
    </div>
  );
};
