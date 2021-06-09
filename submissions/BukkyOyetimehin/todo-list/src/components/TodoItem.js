import React, { Component } from "react";
import styles from "./TodoItem.module.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      this.setState({ editing: false });
    }
  };

  render() {
    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }

    const completedStyle = {
      fontStyle: "italic",
      color: "green",
      opacity: 0.7,
      textDecoration: "line-through",
    };
    const { completed, id, title } = this.props.todo;

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <span style={completed ? completedStyle : null}>{title}</span>
          <div>
            <label className={styles.container}>
              <input
                type="checkbox"
                checked={completed}
                onChange={() => this.props.handleChangeProps(id)}
              />
              <span class={styles.checkmark}></span>
            </label>
          </div>
        </div>

        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            this.props.setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

export default TodoItem;
