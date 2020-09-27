import React from "react";
import { IconButton, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import styles from "../style/Stylesheet.module.css";

export default class FormComponent extends React.Component {

  state = {
    text: ''
  };

  onChangeTask = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  onSubmitTask = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: Date.now(),
      taskName: this.state.text.trim(),
      isComplete: false
    })

    this.setState({
      text: ''
    })
  };


  render() {
    
    return (
      <form onSubmit={this.onSubmitTask} noValidate autoComplete="off">
        <div className={styles.form_container}>
          <TextField
            id="standard-full-width"
            fullWidth
            label="Add new task"
            variant="outlined"
            value={this.state.text}
            onChange={this.onChangeTask}
            name="text"
            multiline={false}
          />

          <IconButton
            onClick={this.onSubmitTask}
            color="primary"
            disabled={false}
          >
            <SendIcon />
          </IconButton>
        </div>
      </form>
    );
  }
}
