import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: "",
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title)
      this.setState({
        title: "",
      })
    } else {
      alert("Please create todo")
    }
  };
  render() {
    return (
        <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Create new todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <button className="add-btn">+</button>
      </form>
    )
  }
}
export default InputTodo