import React from 'react';

const Input = (props) => {
    return (
        <div
            style={{
                backgroundColor: '#484349'
            }}
            id='todo-header'
        >
            <p
                id='todo-text'
                className='pt-5 text-white'
                style={{ fontSize: 'xxx-large', fontWeight: 'bold' }}
            >TODO</p>
            <div
                className='mt-4 d-flex justify-content-between align-items-center'
                style={{margin: '0 auto' }}
                id='todo-input'
            >
                <input
                    id={props.name}
                    type='text'
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    style={{
                        height: '50px',
                        borderRadius: '10px',
                        border: 'none',
                        padding: '0 20px'
                    }}
                />
                <button
                    onClick={props.handleAddClick} style={{
                        backgroundColor: '#d4e6ec',
                        height: '50px',
                        borderRadius: '10px',
                        border: 'none'
                    }}
                    className={props.buttonDisabled ? 'disabled' : ''}
                >
                    <i className="fa fa-lg fa-plus" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    )
}

export default Input;