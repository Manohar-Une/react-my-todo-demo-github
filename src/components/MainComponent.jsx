import React from "react";
import styles from "../style/Stylesheet.module.css";
import HeaderComponent from "./HeaderComponent";
import FormComponent from "./FormComponent";
import TaskComponent from "./TaskComponent";
import FooterComponent from "./FooterComponent";

export default class MainComponent extends React.Component {

  state = {
    tasks: [],
    selectedButton: "all",
    isTaskPresent: false,
  };

  addNewTask = (newTask) => {
    if (newTask.taskName !== "") {
      let isPresent = this.checkDuplicateTaskName(newTask.taskName);
      if (isPresent) {
        this.setState({
          isTaskPresent: true,
        });
      } else {
        this.setState({
          tasks: [newTask, ...this.state.tasks],
          isTaskPresent: false,
        });
      }
    }
  };

  checkDuplicateTaskName(newTaskName) {
    const { tasks } = this.state;
    let isPresent = false;
    for (let taskName of tasks) {
      if (taskName.taskName.toLowerCase() === newTaskName.toLowerCase()) {
        isPresent = !isPresent;
        break;
      }
    }
    return isPresent;
  }

  onFilterButtonClicked = (newSelectedButton) => {
    this.setState({
      selectedButton: newSelectedButton,
    });
  };

  onTaskCompleted = (id) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isComplete: !task.isComplete,
          };
        } else {
          return task;
        }
      }),
    });
  };

  onTaskDeleted = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
    });
  };

  render() {

    let tasks = [];
    const { selectedButton } = this.state;

    if (selectedButton === "all") {
      tasks = this.state.tasks;
    } else if (selectedButton === "active") {
      tasks = this.state.tasks.filter((task) => !task.isComplete);
    } else if (selectedButton === "complete") {
      tasks = this.state.tasks.filter((task) => task.isComplete);
    }

    let taskList = "";

    if (tasks.length === 0) {
      taskList = <div className={styles.error_message}>No data found.</div>;
    } else {
      taskList = tasks.map((task) => (
        <TaskComponent
          key={task.id}
          task={task}
          onCompleteButtonClicked={() => this.onTaskCompleted(task.id)}
          onDeleteButtonClicked={() => this.onTaskDeleted(task.id)}
        />
      ));
    }

    let errorMessage = "";

    if (this.state.isTaskPresent && tasks.length > 0) {
      errorMessage = <div className={styles.error_message}>Task already exist!</div>;
    } else {
      errorMessage = "";
    }

    let footer = <FooterComponent currentFilterButton={this.state.selectedButton} tasks={this.state.tasks} onButtonFilter={this.onFilterButtonClicked} />;

    return (
      <React.Fragment>
        <HeaderComponent />
        <FormComponent onSubmit={this.addNewTask} />
        <div className={styles.task_list_container}>
          {errorMessage}
          {taskList}
          {footer}
        </div>
      </React.Fragment>
    );
  }
}
