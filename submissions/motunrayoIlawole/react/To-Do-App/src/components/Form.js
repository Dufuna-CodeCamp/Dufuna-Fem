import React, { Component } from 'react';

class Form extends Component {
    state = {
        name: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.name !== '') {
            this.props.addTask(this.state.name);
            this.setState({
                name: ''
            })
        }
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
				<input 
                type = "text" 
                className = "input-todo"
                name = "todo" 
                placeholder = "Create a new todo..." 
                autoComplete = "off"
                value = {this.state.name}
                onChange = {e => this.setState({ name: e.target.value})} />
				<button type = "submit" className = "btn-submit">+</button>
			</form>
        )
    }
}

export default Form;