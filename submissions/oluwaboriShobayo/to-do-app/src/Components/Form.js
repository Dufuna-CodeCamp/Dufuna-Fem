import React from "react";

const Form = ({setInputText, todos, setTodos,  inputText }) => {
    
    const inputFieldHandler =(e) => {
       setInputText(e.target.value);
    };
   
    const handleSubmit = (e) => {
        e.preventDefault();
         if (e.target.value == '') { 
            return false;
         }else {
            setTodos ([
                    ...todos, {text:inputText, completed:false, id:Math.random() * 10000}
            ]);
            setInputText('');
        };
    };
    return (
            <form onSubmit={handleSubmit} className="InputTodo"  >
                <input 
                    value={inputText} 
                    onChange={inputFieldHandler} 
                    type="text" 
                    className="TodoInput" 
                    placeholder="Create a new todo..."
                    required
                />
                <button
                    className="submitInput">+</button>
            </form>
    );
};


export default Form;