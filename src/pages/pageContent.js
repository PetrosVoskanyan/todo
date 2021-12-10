import { Component } from 'react';
import { Header } from '../components/header/header';
import { TaskDetails } from './taskDetails/task-details';
import { TaskList } from './taskList/task-list';

export class PageContent extends Component {
  state = {
    taskList: [
      {
        title: 'personal todos',
        description: 'my personal staff',
        todos: [
          {
            name: 'wash the dishes',
            idDone: false,
          },
          {
            name: 'go for shopping',
            idDone: false,
          },
        ],
      },
      {
        title: 'personal to-do',
        description: 'with avatars or upload your custom avatar',
        todos: [
          {
            name: 'to-do item',
            idDone: false,
          },
          {
            name: 'to-do item',
            idDone: false,
          },
        ],
      },
    ],
    selectedTask: 0,
  };

  render() {
    return (
      <div>
        <Header />
        <div className="PageContainer">
          <TaskList
            tasks={this.state.taskList}
            selected={this.state.selectedTask}
            onChange={(ind) => this.selectedTaskChange(ind)}
          />
          <TaskDetails
            activeTask={this.state.taskList[this.state.selectedTask]}
            tasks={this.state.taskList[this.state.selectedTask]}
          />
        </div>
      </div>
    );
  }

  selectedTaskChange(index) {
    this.setState({
      selectedTask: index,
    });
  }
}
