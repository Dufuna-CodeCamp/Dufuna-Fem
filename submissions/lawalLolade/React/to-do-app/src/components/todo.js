import React from 'react'

const Index = ({id,text, todo, completeTodo, incompleteTodo}) => {
    return (
        <li>
            {todo.completed ?  
                <div className='marked'>
                    <span>{text}</span>
                    <i className="far fa-check-square marked" 
                        onClick={() => incompleteTodo(id)}
                    />
                </div>
            :
                <div className='unmarked'>
                    <span>{text}</span>
                    <i className='far fa-square' 
                        onClick={() => completeTodo(id)}
                    />
                </div>
            }
        </li>
    )
}

export default Index
