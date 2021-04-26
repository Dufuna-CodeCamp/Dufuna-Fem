import React, {Component} from 'react'

class Form extends Component {
    state = {
        inputText: '',
        items:[]
    }

    handleInputText = (e) => {
        this.setState({inputText: e.target.value})
        console.log(e.target.value);
    }

    SubmitNewTodo = (e) => {
        e.preventDefault()
        
        if (this.state.inputText === '') {
            return false
        }

        const newItem ={
            text:this.state.inputText,
            completed: false,
        }

        this.props.onSubmit(newItem)   

        this.setState( (prevState)=>({
            inputText: "",
        }))
    }
    
    render() {
        return (
            <form onSubmit={this.SubmitNewTodo}> 
                <input type='text'
                 name='text' 
                 value={this.state.inputText} 
                 placeholder='Create a new todo...' 
                 onChange={this.handleInputText} />
                <button><i className='fas fa-plus white' /></button>
            </form>
        )
    }
}

export default Form

