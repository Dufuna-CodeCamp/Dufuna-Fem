import React, {useState, useEffect} from 'react'
import Todo from './todo'

const Index = ({todos, setTodos, active, setActive}) => {
    const [filteredTodo, setFilteredTodo] = useState([])
    const [status, setStatus] = useState('all')

    useEffect(() => {
        filterHandler()
    }, [todos, status])

    const filterHandler = () => {
        switch(status) {
            case 'active':
                setFilteredTodo(todos.filter(todo => todo.completed !== true));
                break;
            case 'completed':
                setFilteredTodo(todos.filter(todo => todo.completed === true))
                break;
            default:
            setFilteredTodo(todos)
        }
    }

    // To move todoitem to completed task
    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
                todo.active = !todo.active
            }
            return todo
        })
        setTodos(updatedTodos)
        setActive(prevState => prevState - 1)
    }   

   
    // To move completed task back to todo item
    const incompleteTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
                todo.active = !todo.active
            }
            return todo
        })
        setTodos(updatedTodos)
        setActive(prevState => prevState + 1)
    }

    // To clear all completed Tasks
    const clearCompleted = () => {
        const removeArr = [todos].filter(todo => todo.completed === false)
        setTodos(removeArr)
    }


    return (
        <div>
            <div className='px-4 pt-3 bottom-section px-lg-0' >
        
                <ul className='todo-list my-3'>
                    {filteredTodo.map((todo) => (
                        <Todo key={todo.id} 
                        text={todo.text} todo={todo} 
                        setTodos={setTodos} 
                        completeTodo={completeTodo} 
                        incompleteTodo={incompleteTodo}  
                        />
                    ))}
                </ul>
                

                <div className='d-flex justify-content-between d-lg-none'>
                    <p>{active}{active > 1 ? ' items' : ' item'} left</p>
                    <p className='text-danger' onClick={clearCompleted}><i className='fas fa-times' /> Clear Completed</p>
                </div>


                {/* Change status of items for filtering *large screens*/}
                <div className=' d-none d-lg-flex justify-content-between bottom'>
                    <p>{active}{active > 1 ? ' items' : ' item'} left</p>
                    <span className='d-flex filters justify-content-center'>
                        <p onClick={() => setStatus('all')}>All Items</p>
                        <p onClick={() => setStatus('active')}>Active</p>
                        <p onClick={() => setStatus('completed')}>Completed</p>
                    </span>
                    <p className='text-danger' onClick={clearCompleted}><i className='fas fa-times' /> Clear Completed</p>
                </div>

            </div>
            
            {/* Change status of items for filtering *small screens*/}
            <div className='bg-white fixed-bottom d-lg-none'>
                <span className='d-flex justify-content-between filters mt-2'>
                    <p onClick={() => setStatus('all')}>All Items</p>
                    <p onClick={() => setStatus('active')}>Active</p>
                    <p onClick={() => setStatus('completed')}>Completed</p>
                </span>
            </div>
            
        </div>
    )
}

export default Index
