import React from 'react';
import './Input.css';


const Input = (props) => {

    return (
        <div className="form-control">
            <input id={props.name} name={props.name} checked={props.checked}
                type={props.inputType} onChange={props.handleChange}
                placeholder={props.placeholder}></input>
        </div>
    );
}

export default Input;