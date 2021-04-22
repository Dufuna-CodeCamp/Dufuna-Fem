import React from 'react'; 
import '../App.css';
import '../index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from '@fortawesome/fontawesome-free-regular'
import { faCheckSquare } from '@fortawesome/fontawesome-free-regular'


class TodoItem extends React.Component {

  render () {

    const {todo} = this.props;

    return (
      <div className={'todoItem' + (todo.completed ? ' completed' : '')} onClick={this.toggleTodo}>
        {todo.text} 
        <div className="box">
        <FontAwesomeIcon icon={todo.completed ?   faCheckSquare : faSquare}/>
        </div>
      </div> 
    );
  }
  toggleTodo = () => {
    this.props.updateTodoFn(this.props.todo);
  }
}
export default TodoItem;
