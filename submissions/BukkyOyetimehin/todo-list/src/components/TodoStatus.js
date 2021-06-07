import React from "react";
import './TodoStatus.css';

const TodoStatus = (props) => {
  return (
    <div className="status">
      <span className="status1">{props.todosLeft().length} Items Left</span>
      <span className="status2">All Items</span>
      <span className="status3">Active</span>
      <span className="status4">Completed</span>
      <span className="status5">XCleared Completed</span>
    </div>
  );
};

export default TodoStatus;
