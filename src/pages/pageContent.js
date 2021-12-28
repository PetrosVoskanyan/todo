import { Component } from 'react';
import { Header } from '../components/header/header';
import { TaskDetails } from './taskDetails/task-details';
import { TaskList } from './taskList/task-list';
import { CreateTaskListItemForm } from './taskList/createTaskListItemForm/create-task-list-item-form';

const TASKS_LIST_STORAGE_KEY = 'tasks-storage-key';

export class PageContent extends Component {
  state = {
    taskList: JSON.parse(localStorage.getItem(TASKS_LIST_STORAGE_KEY)) ?? [],
    selectedTask: 0,
    isAddMode: false,
  };

  render() {
    return (
      <div>
        <Header />
        <div className="PageContainer">
          <TaskList
            onRemove={(ind) => this.onDeleteTask(ind)}
            onAdd={() => this.ChangeAddMode()}
            tasks={this.state.taskList}
            selected={this.state.selectedTask}
            onChange={(ind) => this.selectedTaskChange(ind)}
          />
          {
            !this.state.isAddMode ? (
              this.state.taskList[this.state.selectedTask] &&
              (
                <TaskDetails
                  onDelete={(ind) => this.onDeleteTodo(ind)}
                  activeTask={this.state.taskList[this.state.selectedTask]}
                  onSave={(todo) => this.handleSaveTodo(todo)}
                />
              )
            ) : (
              <CreateTaskListItemForm
                onTaskSave={(task) => this.handleSaveTask(task)}
                onAddMode={() => this.ChangeAddMode()}
              />
            )
          }
        </div>
      </div>
    );
  }

  selectedTaskChange(index) {
    this.setState({
      selectedTask: index,
      isAddMode: false,
    });
  }

  ChangeAddMode() {
    this.setState({
      isAddMode: !this.state.isAddMode,
    });
  }

  handleSaveTodo(todo) {
    this.state.taskList[this.state.selectedTask].todos.push(todo);
    this.setState({});

    localStorage.setItem(TASKS_LIST_STORAGE_KEY, JSON.stringify(this.state.taskList));
  }

  handleSaveTask(task) {
    const newTaskList = [task, ...this.state.taskList];

    this.setState({
      taskList: newTaskList,
      isAddMode: false,
    });

    localStorage.setItem(TASKS_LIST_STORAGE_KEY, JSON.stringify(newTaskList));
  }

  onDeleteTask(ind) {
    const draftTaskList = this.state.taskList;
    draftTaskList.splice(ind, 1);
    localStorage.setItem(TASKS_LIST_STORAGE_KEY, JSON.stringify(draftTaskList));

    this.setState({
      taskList: draftTaskList,
    });
  }

  onDeleteTodo(ind) {
    const draftTaskList = this.state.taskList;
    draftTaskList[this.state.selectedTask].todos.splice(ind,1);

    localStorage.setItem(TASKS_LIST_STORAGE_KEY, JSON.stringify(draftTaskList));

    this.setState({
      taskList: draftTaskList,
    });
  }
}
