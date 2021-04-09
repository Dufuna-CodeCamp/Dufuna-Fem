import React from 'react';

const App = () => {
	return (
		<div className = "todoapp">
			<h1>TODO</h1>
			<form>
				<input type = "text" className = "input-todo" name = "todo" placeholder = "Create a new todo..." autoComplete = "off" />
				<button type = "submit" className = "btn-submit">+</button>
			</form>
			<div className = "todo-container">
				<div className = "todo-list">
					<ul role = "list" aria-labelledby = "list-heading">
						<li className = "todo">
							<div className = "todo-item">
								<label className = "todo-label" htmlFor = "todo-0">Eat</label>
								<input id = "todo-0" type = "checkbox" className = "not-checked" />
							</div>
						</li>
						<li className = "todo">
							<div className = "todo-item">
								<label className = "todo-label" htmlFor = "todo-1">Sleep</label>
								<input id = "todo-1" type = "checkbox" className = "not-checked" />
							</div>
						</li>
						<li className = "todo">
							<div className = "todo-item">
								<label className = "todo-label" htmlFor = "todo-2">Go grocery shopping</label>
								<input id = "todo-2" type = "checkbox" className = "not-checked" />
							</div>
						</li>
						<li className = "todo">
							<div className = "todo-item">
								<label className = "todo-label" htmlFor = "todo-3">Sleep</label>
								<input id = "todo-3" type = "checkbox" className = "not-checked" />
							</div>
						</li>
					</ul>

					<div className = "todo-extras2 show">
						<h2 className = "list-number">
							4 tasks remaining
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
						4 tasks remaining
					</h2>
					<div className = "filters">
						<button type = "button" className = "btn all" aria-pressed = {true}>
							All item
						</button>
						<button type = "button" className = "btn active" aria-pressed = {false}>
							Active
						</button>
						<button type = "button" className = "btn completed" aria-pressed = {false}>
							Completed
						</button>
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

export default App;
