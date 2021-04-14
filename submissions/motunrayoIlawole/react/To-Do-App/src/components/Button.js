import React from 'react';

const Button = (props) => {
    return (
        <button 
        type = "button" 
        className = "btn all" 
        aria-pressed = {props.isPressed}
        onClick = {() => props.setFilter(props.name)}
        >
			{props.name}
		</button>
    )
}

export default Button;