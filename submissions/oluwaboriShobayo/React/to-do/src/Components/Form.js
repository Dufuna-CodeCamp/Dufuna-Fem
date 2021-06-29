import React from "react";

const Form = ({setInputText, todos, setTodos,  inputText }) => {

    const inputFieldHandler =(e) => {
        setInputText(e.target.value);
    };
 const submitHandler = (e) => {
        e.preventDefault();
        setTodos ([
                ...todos, {text:inputText, completed:false, id:Math.random() * 10000}
        ]);
        setInputText('');
    };
    return (
            <form className="InputTodo">
                <input 
                    value={inputText} 
                    onChange={inputFieldHandler} 
                    type="text" 
                    className="TodoInput" 
                    placeholder="Create a new todo..."
                />
                <button
                    onClick={submitHandler} 
                    className="submitInput" 
                    type="submit"
                  >
                    <i className="fa fa-plus"></i>
                </button>
            </form>
    );
};


export default Form;