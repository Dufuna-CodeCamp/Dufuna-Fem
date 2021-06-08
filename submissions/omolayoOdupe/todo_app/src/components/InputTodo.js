import React from 'react';

const InputTodo = (props) => {

    return(
        <form className='to-do-form'>
            <input
                value ={props.value}
                type='text'
                placeholder='create a new todos...'
                onChange={props.inputTodoHandler}    
            >
            </input>
            <button onClick={props.addItemHandler} disabled={props.disabled}>
                +
            </button>    
        </form>
    )
}

export default InputTodo;