import React from 'react';
import './Button.css'


const Button = (props) => {

    return (
        <div>
            <button className="btn"
                disabled={props.disabled} onClick={props.handleChange}> <i className="fa fa-plus"></i> </button>
        </div>
    )

}

export default Button;