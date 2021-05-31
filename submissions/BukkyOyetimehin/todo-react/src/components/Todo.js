import React from 'react';
import { GiCheckMark } from "react-icons/gi";
import { FaTrash } from "react-icons/fa"

const Todo = ({ text, todo, todos, setTodos}) => {
    //Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () =>{
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }   
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler}className="complete-btn" style={{ color: todo.completed? 'green': 'red' }}><GiCheckMark /></button>                
            <button onClick={deleteHandler} className="trash-btn"><FaTrash /></button>       
        </div>
    )
}

export default Todo;