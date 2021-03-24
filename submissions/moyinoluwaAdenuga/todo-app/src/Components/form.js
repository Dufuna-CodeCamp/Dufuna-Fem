import React, {Component} from 'react'

class Form extends Component {
    state = {
        input: ''
    }

    handleChange = (e) => {
        this.setState({input: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        if (this.state.input === '') {
            return false
        }

        let newTodo = {
            text: this.state.input, 
            completed: false, 
        }

        this.props.onSubmit(newTodo)
        this.setState({input: ''})
    }
    
    render() {
        return (
            <div className='top-height'>
                <header>
                    <h1>todo</h1>
                </header>
                <form onSubmit={this.handleSubmit}> 
                    <input type='text' name='text' value={this.state.input} placeholder='Create a new todo...' onChange={this.handleChange} />
                    <button><i className='fas fa-plus white' /></button>
                </form>
            </div>
        )
    }
}

export default Form

