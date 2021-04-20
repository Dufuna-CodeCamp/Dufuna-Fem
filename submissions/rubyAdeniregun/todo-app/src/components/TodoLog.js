import React from 'react'

class TodoLog extends React.Component {
    render () {
        return (
            <div className="below-text">
                
                <h4 className="toplog1">All items</h4>
                <h4 className="toplog2">Active</h4>
                <h4 className="toplog3">completed</h4>
                
            </div>
        )
    }
}

export default TodoLog;