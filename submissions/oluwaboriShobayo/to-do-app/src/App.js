import React, { useState }from 'react';
import './App.css';
import Form from './Components/Form';
import Todolist from './Components/Todolist';
import Footer from './Components/Footer'

function App() {
   const [inputText, setInputText] = useState("");
   const [todos, setTodos] = useState([]);

  return (
    <div className="App">
          <header>
              <h1>TODO</h1>
          </header>
        <Form 
           inputText={inputText} 
            todos={todos} 
            setTodos={setTodos} 
            setInputText={setInputText}
          />  
          <Todolist 
            setTodos={setTodos}
            todos={todos}/>
          <Footer  
            setTodos={setTodos}
            todos={todos}/>
    </div>
  );
}

export default App;
