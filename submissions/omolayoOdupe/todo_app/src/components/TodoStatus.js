import React from 'react';

const TodoStatus = (props) => {
    return (
        <div className='status'>
            <span className='items-left'>{props.itemsLeft().length} Items left</span>
            <span className='all-items'>All Items</span>
            <span className='active'>Active</span>
            <span className='completed'>Completed</span>
            <span className='cleared'>X Cleared Completed</span>
        </div>
    )
}

export default TodoStatus;

