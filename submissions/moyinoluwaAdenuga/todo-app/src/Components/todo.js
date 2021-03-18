import React from 'react'

const Index = ({text, todo,dragging, completeTodo, incompleteTodo, onDragStart, onDragEnter, getStyles}) => {
    return (
        <li className='my-3'
        onDragStart = {onDragStart}
        onDragEnter = {onDragEnter}
        draggable
        >
            {!todo.completed ?  
                    <div 
                    className={!dragging ? 'd-flex justify-content-between align-items-center' : getStyles(todo)}
                    >
                        <span>{text}</span>
                        <i className='far fa-square text-danger' 
                        onClick={() => completeTodo(todo.id)}
                        />
                    </div>
            :
                <div className={!dragging ? 'd-flex justify-content-between align-items-center' : getStyles(todo)}>
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
