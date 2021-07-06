import React from "react";

const Todo = ({text, completed, todo, todos, setTodos}) => {
    
const checkHandler = () => {
setTodos(
    todos.map((item) => {
    if(item.id === todo.id){
        return {
            ...item,
            completed: !item.completed 
        };
    }
        return item;
}))
}
 
return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : "active"}`}>
                {text}</li>
            <label className="container" >
                 <input 
                     onChange={checkHandler} 
                     type="checkbox" 
                     id="checkbox" 
                     className="active" 
                     checked={completed}
                  />
                 <span className="checkmark"></span>
            </label>
        </div>
    );
};


export default Todo;