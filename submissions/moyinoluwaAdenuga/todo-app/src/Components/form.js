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

        this.props.onSubmit({
            text: this.state.input, 
            completed: false, 
            id: Math.random() * 1000, 
            active: true 
        })
        
        this.setState({input: ''})
    }
    
    render() {
        return (
            <div className='mx-4 d-flex flex-column justify-content-between top-height pb-4 mx-md-0'>
                <header>
                    <h1 className='text-uppercase pt-5 mt-4'>todo</h1>
                </header>
                <form onSubmit={this.handleSubmit} className='text-center'> 
                    <input type='text' name='text' value={this.state.input} placeholder='Create a new todo...' onChange={this.handleChange} />
                    <button><i className='fas fa-plus text-white' /></button>
                </form>
            </div>
        )
    }
}

export default Form
