import React, {Component} from 'react'
import Form from './components/form'
import Todo from './components/todo'
import './App.css';

class App extends Component {
	state = {
		todos: [],
		status: 0
	}

	// Add new item to todo array on submit
	addTodo = (todo) => {
		this.setState({
			todos: [todo, ...this.state.todos],
			status: this.state.status + 1
		})
	}

	// Toggle completion status of todo items
	toggleStatus = (id) => {
		let updatedTodos = this.state.todos.map((todo, index) => {
			if (id === index) {
                todo.completed = !todo.completed
                // todo.status = !todo.status
            }
            return todo
		})
		return updatedTodos
	}

	// mark todo items to completed task
    completeTodo = (id) => {
		this.setState({
			todos: this.toggleStatus(id),
			status: this.state.status - 1
		})
    }   
   
    // Unmark completed task back to todo items list
    incompleteTodo = (id) => {
        this.setState({
			todos: this.toggleStatus(id),
			status: this.state.status + 1
		})
    }

	// remove all completed Tasks from todo list
    clearCompleted = () => {
        const removeArr = this.state.todos.filter(todo => todo.completed === false)
        this.setState ({
			todos: removeArr
		})
    }

	render() {
		let todos = this.state.todos

		return (
			<div className='Container'>
				<div className='todo-header'>
					<div className='todo-header-content'>
						<header>
							<h1>TODO</h1>
						</header>
						<Form onSubmit={this.addTodo} todos={todos} />
					</div>
				</div>
				<div>
					<div className='todo-list-content' >
						<ul>
							{todos.map((todo,index) => (
								<Todo key={index} 
								text={todo.text} 
								id = {index}
								todo={todo} 
								completeTodo={this.completeTodo} 
								incompleteTodo={this.incompleteTodo}  
								/>
							))}
						</ul>
						
						<div className='todo-action-details'>
							<p>{this.state.status}{this.state.status > 1 ? ' items' : ' item'} left</p>
							<p className='red-text' onClick={this.clearCompleted}>
								<i className='fas fa-times'> Clear Completed </i>
							</p>
						</div>

						<div className='todo-list-footer'>
							<span>{this.state.status}{this.state.status > 1 ? ' items' : ' item'} left</span>
							<div className='items-status'>
								<span>All Items</span>
								<span className='red-text'>Active</span>
								<span>Completed</span>
							</div>
							<span className='red-text' onClick={this.clearCompleted}>
								<i className='fas fa-times'> Clear Completed </i>
							</span>							
						</div>

						<div className='small-screen-footer'>
							<div className='small-screen-status items-status'>
								<span>All Items</span>
								<span className='red-text'>Active</span>
								<span>Completed</span>
							</div>
						</div>

					</div>
					
				</div>
			</div>
		);

	}

}

export default App;
