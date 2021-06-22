import React from "react";

const Footer = ({todos, setTodos}) => {
    return (
        <div className="footer">
            <span className="item1">{todos.filter(todo => todo.completed === false).length} Items left</span>
            <span className="item2">All items</span>
            <span className="item3">Active</span>
            <span className="item4">Completed</span>
            <span className="item5">XClear Completed</span>
        </div>
    )
}
export default Footer