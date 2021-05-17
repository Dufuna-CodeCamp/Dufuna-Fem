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
        <div className='container-text'>
        <h4 className='container-text1'> 3 items left</h4>
        <h4 className='container-text2'>X clear completed</h4>
        </div>
      </div>
    ); 
  }

  updateTodo = (todo) => {
    this.props.updateTodoFn(todo)
  }
  
}

export default TodoList;
 