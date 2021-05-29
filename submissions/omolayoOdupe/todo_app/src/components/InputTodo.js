import React from 'react';
import {FaPlus} from 'react-icons/fa';


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
                <FaPlus className='faplus' /> 
            </button>    
        </form>
    )
}

export default InputTodo;