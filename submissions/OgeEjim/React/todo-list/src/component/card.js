import React from 'react';

const Card = (props) => {
    return (
        <div className="customCard mb-3">
            <span className={!props.todo.checked ? "newList" : "checkedList"}>{props.todo.name}</span>
            <input className="checkboxes" type="checkbox" onClick={(e) => props.onButtonClick(e, props.index)} checked={props.todo.checked} style={{borderColor: 'red', outlineColor: 'red'}} />      
        </div>
    );
};

export default Card;                                                       