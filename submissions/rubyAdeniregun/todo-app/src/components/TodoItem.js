import React from 'react'; 
import '../App.css';
import './style.css';
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
        <FontAwesomeIcon icon={todo.completed ? faCheckSquare : faSquare}/>
        
        </div>
      

      </div>

        
    );
  }

  

  toggleTodo = () => {
    this.props.updateTodoFn(this.props.todo);
  }
}


export default TodoItem;


/* import React, { Component } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'


class TodoItem extends Component {

    constructor(props) {
        super(props);

        this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(todo) {
    this.props.handleUpdate(todo);
  }


    render () {
        
        return(
            <div>
                
                    <form 
                        onSubmit={this.addItem}
                        style={{display:"flex",
                        justifyContent:"space-between",
                        gap:"10px",
                        }}
                        
                        
                        className="todoInput">
                            
                            <Input
                             className="input"
                             type="text"
                             newItemSubmitHandler={this.newItemSubmitHandler}
                             handleItemInput={this.handleItemInput}
                             value={this.state.pendingItem}
                             placeholder="Add an item"
                            />    

                            <Button                         
                            name="Submit Todo"
                            type="submit"  
                            />

                    </form>
                </div>

        )
    }
}
*/
