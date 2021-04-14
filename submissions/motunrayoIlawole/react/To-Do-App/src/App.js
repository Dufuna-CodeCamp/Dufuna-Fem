import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Todo from './components/Todo';
import Button from './components/Button';
import Form from './components/Form';

class App extends Component {
	state = {
		tasks: this.props.tasks
	}

	render() {
		const toggleCompleted = (id) => {
			const updatedTasks = this.state.tasks.map(task => {
				if (id === task.id) {
					const theStatus = task.status === 'active' ? 'completed' : 'active';
					return { ...task, status: theStatus }
				}

				return task;
			} )
			this.setState({
				tasks: updatedTasks
			})
		}

 		const tasklist = this.state.tasks.map(task => {
			return (
				<Todo id = {task.id} name = {task.name} status = {task.status} key = {task.id} toggleStatus = {toggleCompleted} />
			)
		});

		const addTask = (name) => {
			const newTask = { id: `todo-${nanoid()}`, name: name, status: true };
			const theTasks = this.state.tasks
			this.setState({
				tasks: [ ...theTasks, newTask]
			})
			console.log(this.state.tasks);
		}

		const tasksNoun = tasklist.length !== 1 ? 'tasks' : 'task';
		const taskRemaining = `${tasklist.length} ${tasksNoun} remaining`;

		return (
			<div className = "todoapp">
				<h1>TODO</h1>
				<Form addTask = {addTask} />
				<div className = "todo-container">
					<div className = "todo-list">
						<ul role = "list" aria-labelledby = "list-heading">
							{tasklist}
						</ul>
	
						<div className = "todo-extras2 show">
							<h2 className = "list-number">
								{taskRemaining}
							</h2>
							<div className = "clear">
								<button type = "button" className = "btn clear" aria-pressed = {true}>
									X Clear Completed
								</button>
							</div>
						</div>
					</div>
					<div className = "todo-extras">
						<h2 className = "list-number">
							{taskRemaining}
						</h2>
						<div className = "filters">
							<Button />
							<Button />
							<Button />
						</div>
						<div className = "clear">
							<button type = "button" className = "btn clear" aria-pressed = {true}>
								X Clear Completed
							</button>
						</div>
					</div>
				</div>
	
			</div>
		)
	}
	
}

export default App;
