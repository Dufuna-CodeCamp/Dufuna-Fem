import React from 'react'
import {FaPlus} from "react-icons/fa";

const Form = ({setInputText,todos,setTodos,inputText, setStatus}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText("");       
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };
    return (
       <form>
           <input value={inputText} onChange={inputTextHandler} type="text"   placeholder="Create todo..." className="todo-input"/>          
           <button onClick={submitTodoHandler}className="todo-button" type="submit">
                <FaPlus />
            </button>
            <div onChange= {statusHandler} className="select">
            <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Active</option>
            </select>            
        </div>
            
       </form>
    )
}

export default Form;
