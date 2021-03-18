import React, {useState} from 'react'
import Form from './Components/form'
import TodoList from './Components/todoList'
import './App.css';


function App() {
  const [todos, setTodos] = useState([])
  const [active, setActive] = useState(0)

  return (
    <div className='bg'>
      <div className='page'>
        <section className='top-section'>
          <Form todos={todos} setTodos={setTodos} setActive={setActive}/>
        </section>
        <TodoList todos={todos} setTodos={setTodos} active={active} setActive={setActive} />
      </div>
    </div>
  );
}

export default App;
