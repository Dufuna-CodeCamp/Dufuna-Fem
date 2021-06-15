import React from 'react';

const TodoList = (props) => {

    const box = {color: "green", textDecoration: "line-through"}

    const completed = props.completed;

    const items = props.items;

    const listItems = items.map(item => 
        {return <div className='list' key={item.key} style={item.completed ? box : null} >
                        {item.text}
                        <input className='checkbox' type='checkbox' value={completed} onChange={() => props.toogleCheckBox(item.key)}/>
                </div>                           
        })
        return(
            <div>
                {listItems}    
            </div>
    )
}

export default TodoList;