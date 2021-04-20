import React from 'react'; 
import TodoItem from './TodoItem'



class TodoList extends React.Component {

  render () {

    const {todos} = this.props;

    return (
      <div className='todoListContainer'>
        {
          todos.map((_todo, _index) => { 
            return(
                <TodoItem updateTodoFn={this.updateTodo} key={_index} todo={_todo}>
            
                </TodoItem>
            )
          })       
        }
        <div className='log1'>
        <h4 className='container-log1'> 3 items left</h4>
        <h4 className='container-log2'>X clear completed</h4>
        </div>
      </div>
    ); 
  }

  updateTodo = (todo) => {
    this.props.updateTodoFn(todo)
  }
  
}

export default TodoList;
 


/* import TodoItem from '../Todoitem/Todoitem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { todos: [
        'Learn React',
        'Write blog posts',
        'Kick back and relax'
      ]};
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(todo) {
    this.setState({ todo });
  }

  render() {
    return (
        <ul>
        {this.state.todos.map((todo, index) => {
          <TodoItem todo={todo} key={index} updateTodo={this.handleUdpate} />
        })}
      </ul>
    );
  }
}*/

