import React from 'react';

const InputTodo = (props) => {

    return(
        <form className='to-do-form'>
            <input
                value ={props.value}
                type={props.inputType}
                placeholder={props.placeholder}
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