import React, { Component } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import TodoStatus from "./TodoStatus";

class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Go Shopping for Groceries",
        completed: true,
      },
      {
        id: uuidv4(),
        title: "Appointment with the Doctor",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Attend PTA Meeting",
        completed: false,
      },
    ],
  };
  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };
  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  };

  todosLeft = () => {
    return this.state.todos.filter((todo) => !todo.completed);
  };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            setUpdate={this.setUpdate}
          />
          <TodoStatus todosLeft = {this.todosLeft} />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
