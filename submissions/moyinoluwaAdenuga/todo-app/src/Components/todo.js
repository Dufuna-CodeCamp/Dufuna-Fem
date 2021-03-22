import React from 'react'

const Index = ({text, todo, completeTodo, incompleteTodo}) => {
    return (
        <li className='todo-item'>
            {!todo.completed ?  
                <div>
                    <span>{text}</span>
                    <i className='far fa-square red' 
                    onClick={() => completeTodo(todo.id)}
                    />
                </div>
            :
                <div>
                    <span className='completed green'>{text}</span>
                    <i className="far fa-check-square green" 
                    onClick={() => incompleteTodo(todo.id)}
                    />
                </div>
            }
        </li>
    )
}

export default Index
