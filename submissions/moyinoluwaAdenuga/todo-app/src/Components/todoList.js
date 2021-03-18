import React, {useState, useRef} from 'react'
import Todo from './todo'

const Index = ({todos, setTodos}) => {
    const [doneTodo, setDoneTodo] = useState([])
    const [status, setStatus] = useState('all')
    const [dragging, setDragging] = useState(false)

    // To move todoitem to completed task
    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
                todo.active = !todo.active
                setDoneTodo([todo,...doneTodo])
                
            }
            return todo
        })
        setTodos(updatedTodos.filter(todo => todo.completed !== true))
    }

    // To move completed task back to todo item
    const incompleteTodo = (id) => {
        let updatedTodos = doneTodo.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
                todo.active = !todo.active
                setTodos([todo, ...todos])
            }
            return todo
        })
        setDoneTodo(updatedTodos.filter(todo => todo.completed === true))
    }

    // To clear all completed Tasks
    const clearCompleted = () => {
        const removeArr = [...doneTodo].filter(todo => todo.completed === false)
        setDoneTodo(removeArr)
    }

    // To store drag item
    const dragItem = useRef()
    const dragNode = useRef()

    // When Drag starts
    const onDragStart = (e, todo) => {
        dragItem.current = todo
        dragNode.current = e.target
        dragNode.current.addEventListener('dragend', handleDragEnd)
        setTimeout(() => {
            setDragging(true)
        }, 0)
    }

    // On Drag End
    const handleDragEnd = () => {
        setDragging(false)
        dragNode.current.removeEventListener('dragend', handleDragEnd)
        dragNode.current = null
        dragItem.current = null
    }

    
    const onDragOver = (e) => {
        e.preventDefault()
    }

    // Shuffling tasks in array on drag for active tasks
    const onDragEnter = (e, todo) => {
        if (e.target !== dragNode.current) {
            const index = todos.indexOf(todo)
            setTodos(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList))
                newList.splice(index, 0, newList.splice(todo, 1)[0])
                dragItem.current = todo
                return newList
            })
        }
    }

    // Shuffling tasks in array on drag for completed tasks
    const onDragEnter1 = (e, todo) => {
        if (e.target !== dragNode.current) {
            const index = doneTodo.indexOf(todo)
            setDoneTodo(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList))
                newList.splice(index, 0, newList.splice(todo, 1)[0])
                dragItem.current = todo
                return newList
            })
        }
    }

    // shuffling className when item is dragged
    const getStyles = (todo) => {
        const currentItem = dragItem.current
        if (currentItem === todo) {
            return 'current'
        } 
        return 'd-flex justify-content-between align-items-center'
    }


    return (
        <div>
            <div className='px-4 pt-3 bottom-section px-lg-0' >
                {status === 'all' ? 
                // All tasks
                    <React.Fragment>
                        <ul className='todo-list my-3'
                        onDragOver= {onDragOver}
                        >
                            {todos.map((todo) => (
                                <Todo key={todo.id} 
                                text={todo.text} todo={todo} 
                                setTodos={setTodos} 
                                completeTodo={completeTodo}  
                                onDragStart={(e) => onDragStart(e, todo)}
                                onDragEnter={(e)=> onDragEnter(e, todo)}
                                dragging={dragging}
                                getStyles={getStyles}
                                />
                            ))}
                        </ul>
                        <ul className='todo-list my-3'
                        onDragOver= {onDragOver}
                        >
                            {doneTodo.map((todo) => (
                                <Todo key={todo.id} 
                                text={todo.text} 
                                todo={todo} 
                                setTodos={setTodos}  
                                incompleteTodo={incompleteTodo} 
                                onDragStart={onDragStart}
                                onDragEnter={(e)=> onDragEnter1(e, todo)}
                                dragging={dragging}
                                getStyles={getStyles}
                                />
                            ))}
                        </ul>
                    </React.Fragment>

                : status === 'active' ? 
                // Active tasks
                    <ul className='todo-list my-3'
                    onDragOver= {onDragOver}
                    >
                        {todos.map((todo) => (
                            <Todo key={todo.id} 
                            text={todo.text} 
                            todo={todo} 
                            setTodos={setTodos} 
                            completeTodo={completeTodo}  
                            onDragStart={onDragStart}
                            onDragEnter={(e)=> onDragEnter(e, todo)}
                            dragging={dragging}
                            getStyles={getStyles}
                            />
                        ))}
                    </ul>
                : 
                    // Completed Tasks
                    <ul className='todo-list my-3'
                    onDragOver= {onDragOver}
                    >
                        {doneTodo.map((todo) => (
                            <Todo key={todo.id} 
                            text={todo.text} 
                            todo={todo} 
                            setTodos={setTodos}  
                            incompleteTodo={incompleteTodo} 
                            onDragStart={onDragStart}
                            onDragEnter={(e)=> onDragEnter1(e, todo)}
                            dragging={dragging}
                            getStyles={getStyles}
                            />
                        ))}
                    </ul>
                }

                <div className='d-flex justify-content-between d-lg-none'>
                    <p>{todos.length}{todos.length > 1 ? ' items' : ' item'} left</p>
                    <p className='text-danger' onClick={clearCompleted}><i className='fas fa-times' /> Clear Completed</p>
                </div>


                 {/* Change status of items for filtering *large screens*/}
                <div className=' d-none d-lg-flex justify-content-between bottom'>
                    <p>{todos.length}{todos.length > 1 ? ' items' : ' item'} left</p>
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
