import React, {Component} from 'react'
import Form from './Components/form'
import Todo from './Components/todo'
import './App.css';


class App extends Component {
	state = {
		todos: [],
		active: 0,
	}

	// Add new item to todo array on submit
	addTodo = (todo) => {
		this.setState({
			todos: [todo, ...this.state.todos],
			active: this.state.active + 1
		})
	}

	// Toggle completed status
	toggleStatus = (id) => {
		let updatedTodos = this.state.todos.map((todo, index) => {
			if (id === index) {
                todo.completed = !todo.completed
                todo.active = !todo.active
            }
            return todo
		})
		return updatedTodos
	}

	// To move todoitem to completed task
    completeTodo = (id) => {

		this.setState({
			todos: this.toggleStatus(id),
			active: this.state.active - 1
		})
    }   

   
    // To move completed task back to todo item
    incompleteTodo = (id) => {

        this.setState({
			todos: this.toggleStatus(id),
			active: this.state.active + 1
		})
    }

	// To clear all completed Tasks
    clearCompleted = () => {
        const removeArr = this.state.todos.filter(todo => todo.completed === false)
        this.setState ({
			todos: removeArr
		})
    }

	render() {
		let todos = this.state.todos

		return (
		  	<div className='bg'>
				<div className='page'>
				  	<section className='top-section'>
						<Form onSubmit={this.addTodo} todos={todos} />
				  	</section>
				  	<div>
						<div className='bottom-section' >
					
							<ul className='todo-list'>
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
							

							<div className='active-status'>
								<p>{this.state.active}{this.state.active > 1 ? ' items' : ' item'} left</p>
								<p className='red' onClick={this.clearCompleted}><i className='fas fa-times' /> Clear Completed</p>
							</div>


							{/* Change status of items for filtering *large screens*/}
							<div className='bottom large-screen-filter'>
								<p>{this.state.active}{this.state.active > 1 ? ' items' : ' item'} left</p>
								<span className='screen-filter filters'>
									<p>All Items</p>
									<p>Active</p>
									<p>Completed</p>
								</span>
								<p className='red' onClick={this.clearCompleted}><i className='fas fa-times' /> Clear Completed</p>
							</div>

							{/* Change status of items for filtering *small screens*/}
							<div className='small-screen-filter'>
								<div className='screen-filter filters'>
									<p>All Items</p>
									<p>Active</p>
									<p>Completed</p>
								</div>
							</div>

						</div>
						
					</div>
				</div>
		  	</div>
		);

	}

}

export default App;
