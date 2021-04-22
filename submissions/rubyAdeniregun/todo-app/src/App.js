import React from 'react';
import './App.css';
import './index.js';
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import TodoLog from './components/TodoLog'


class App extends React.Component {

    constructor () {
    super();
      this.state = {
        todos: []
      };  
    }
  
   render() {
     return(
       <div className="container">
         <AddTodo addTodoFn={this.addTodo}></AddTodo>
         <TodoList updateTodoFn={this.updateTodo } todos={this.state.todos}></TodoList>
         
         <div className="counter"> 
         <TodoLog ></TodoLog>
         </div>
         
        </div>
     );
   }

   componentDidMount = () => {
     const todos = localStorage.getItem('todos');

       if(todos) {
          const savedTodos = JSON.parse(todos)
          this.setState({ todos: savedTodos});
       }else { 
          console.log ('No todos');
       }
     }

     addTodo = async (todo) => {
        await this.setState({todos: [...this.state.todos, {
         text: todo,
         completed: false
       }]})
       localStorage.setItem('todos', JSON.stringify(this.state.todos))
       console.log(localStorage.getItem ('todos'))

     }

     updateTodo = async (todo) => {
       const newTodos = this.state.todos.map(_todo => {
         if(todo === _todo)
         return{
           text: todo.text,
           completed: !todo.completed
         }
         else
         return _todo 
       });

      await this.setState({ todos: newTodos});
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
     }

   }

export default App; 



