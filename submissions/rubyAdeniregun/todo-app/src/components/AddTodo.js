import React from 'react'; 

class AddTodo extends React.Component {

  constructor() {
    super();

    this.state = {
      todo: ""
    };
  }

  render () {

    const { todo } = this.state;
    const enabled =
          todo.length >=1          
        
    return (
      <div className="addTodoContainer">
        <h1>TODO</h1>
        <form className="formbox" onSubmit={(e) => this.submitTodo(e)}>
          <input id="addTodoInput" placeholder="create a new todo..." onChange={(e) => this.updateInput(e)} type="text"></input>
          <button type="submit" className="btn" disabled={!enabled}> +</button>
        </form>
      </div>
    );
  }
  
  updateInput = (e) => {
    this.setState({todo: e.target.value})
  }

  submitTodo = (e) => {
    e.preventDefault();
    this.props.addTodoFn(this.state.todo);
    document.getElementById('addTodoInput').value = ""
  }
}

export default AddTodo;