import React from 'react'

const Index = ({text, todo, completeTodo, incompleteTodo}) => {
    return (
        <li className='my-3'>
            {!todo.completed ?  
                <div className='d-flex justify-content-between align-items-center'>
                    <span>{text}</span>
                    <i className='far fa-square text-danger' 
                    onClick={() => completeTodo(todo.id)}
                    />
                </div>
            :
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='text-decoration-line-through text-success'>{text}</span>
                    <i className="far fa-check-square text-success" 
                    onClick={() => incompleteTodo(todo.id)}
                    />
                </div>
            }
        </li>
    )
}

export default Index
