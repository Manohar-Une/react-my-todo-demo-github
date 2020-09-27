import React from "react";
import { Box, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import styles from "../style/Stylesheet.module.css";

function TaskComponent(props) {

  let completed = props.task.isComplete;

  let buttonComponent = ""; 
  
  if (completed === true) {
    buttonComponent = (
      <React.Fragment>
        <Box></Box>
        <Box>
          <IconButton onClick={props.onDeleteButtonClicked} color="secondary">
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      </React.Fragment>
    );
  } else {
    buttonComponent = (
      <React.Fragment>
        <Box>
          <IconButton onClick={props.onCompleteButtonClicked} color="primary">
            <CheckIcon fontSize="small" />
          </IconButton>
        </Box>
        <Box>
          <IconButton onClick={props.onDeleteButtonClicked} color="secondary">
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      </React.Fragment>
    );
  }

  return (

    <div className={styles.task_list_row}>
      <Box p={0.5} m={1} display="flex">
        <Box flexGrow={1}>
          <p className={styles.task_text}>{props.task.taskName}</p>
        </Box>
        {buttonComponent}
      </Box>
    </div>

  );
}
export default TaskComponent;
