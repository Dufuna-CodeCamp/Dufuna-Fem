import React from 'react';

const TodoStatus = (props) => {
    return (
        <div className='status'>
            <span className='status1'>{props.itemsLeft().length}Items left</span>
            <span className='status2'>All Items</span>
            <span className='status3'>Active</span>
            <span className='status4'>Completed</span>
            <span className='status5'>X Cleared Completed</span>
        </div>
    )
}

export default TodoStatus;

