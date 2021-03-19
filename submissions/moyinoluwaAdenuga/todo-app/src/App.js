import React, {Component} from 'react'
import Form from './Components/form'
import Todo from './Components/todo'
import './App.css';


class App extends Component {
	state = {
		todos: [],
		active: 0,
		status: 'all'
	}

	// Add new item to todo array on submit
	addTodo = (todo) => {
		this.setState({
			todos: [todo, ...this.state.todos],
			active: this.state.active + 1
		})
	}

	// To move todoitem to completed task
    completeTodo = (id) => {
        let updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
                todo.active = !todo.active
            }
            return todo
        })

		this.setState({
			todos: updatedTodos,
			active: this.state.active - 1
		})
    }   

   
    // To move completed task back to todo item
    incompleteTodo = (id) => {
        let updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
                todo.active = !todo.active
            }
            return todo
        })

        this.setState({
			todos: updatedTodos,
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
		let todos = []

		if (this.state.status === 'all') {
			todos = this.state.todos
		} else if (this.state.status === 'active') {
			todos = this.state.todos.filter(todo => !todo.completed)
		} else if (this.state.status === 'completed') {
			todos = this.state.todos.filter(todo => todo.completed) 
		}

		return (
		  	<div className='bg'>
				<div className='page'>
				  	<section className='top-section'>
						<Form onSubmit={this.addTodo} />
				  	</section>
				  	<div>
						<div className='px-4 pt-3 bottom-section px-lg-0' >
					
							<ul className='todo-list my-3'>
								{todos.map((todo) => (
									<Todo key={todo.id} 
									text={todo.text} 
									todo={todo} 
									completeTodo={this.completeTodo} 
									incompleteTodo={this.incompleteTodo}  
									/>
								))}
							</ul>
							

							<div className='d-flex justify-content-between d-lg-none'>
								<p>{this.state.active}{this.state.active > 1 ? ' items' : ' item'} left</p>
								<p className='text-danger' onClick={this.clearCompleted}><i className='fas fa-times' /> Clear Completed</p>
							</div>


							{/* Change status of items for filtering *large screens*/}
							<div className=' d-none d-lg-flex justify-content-between bottom'>
								<p>{this.state.active}{this.state.active > 1 ? ' items' : ' item'} left</p>
								<span className='d-flex filters justify-content-center'>
									<p onClick={() => this.setState({status: 'all'})}>All Items</p>
									<p onClick={() => this.setState({status: 'active'})}>Active</p>
									<p onClick={() => this.setState({status: 'completed'})}>Completed</p>
								</span>
								<p className='text-danger' onClick={this.clearCompleted}><i className='fas fa-times' /> Clear Completed</p>
							</div>

						</div>
						
						{/* Change status of items for filtering *small screens*/}
						<div className='bg-white fixed-bottom d-lg-none'>
							<span className='d-flex justify-content-between filters mt-2'>
								<p onClick={() => this.setState({status: 'all'})}>All Items</p>
								<p onClick={() => this.setState({status: 'active'})}>Active</p>
								<p onClick={() => this.setState({status: 'completed'})}>Completed</p>
							</span>
						</div>
						
					</div>
				</div>
		  	</div>
		);

	}

}

export default App;
