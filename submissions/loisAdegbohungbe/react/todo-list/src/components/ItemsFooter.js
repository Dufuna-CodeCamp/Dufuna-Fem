import React from 'react';
import './styles/todo.css';

const Footer = (props) => {
    return (
        <div
            className={'d-flex justify-content-between align-items-center flex-wrap pl-3 pr-3 ' 
            + props.className}
            style={props.style}
            id='footer'
        >
            <span style={{color:'#484349'}} className='s-large mr-3'>{props.remainingItems + ' '} 
            item{props.remainingItems > 1 ? 's' : ''} left</span>
            <span className='d-flex justify-content-between flex-wrap middle-align'>
                <span className='mr-3' style={{color: '#536DFE'}}>All Items</span>
                <span className='mr-3' style={{color: '#D32F2F'}}>Active</span>
                <span style={{color: '#4CAF50'}}>Completed</span>
            </span>
            <button style={{color:'#D32F2F'}} className='s-large align-items-center' onClick={props.onClear}>
                <span style={{fontSize:'20px'}}>✘</span>Clear Completed
            </button>
        </div>
    )
}

export default Footer;