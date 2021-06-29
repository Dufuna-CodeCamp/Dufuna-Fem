import React from "react";

const Footer = ({todos, setTodos}) => {
    return (
        <div className="footer">
            <span className="items-left">{todos.filter(todo => todo.completed === false).length} Items left</span>
            <span className="all-items">All items</span>
            <span className="active-items">Active</span>
            <span className="completed-items">Completed</span>
            <span className="clear-completed">XClear Completed</span>
    </div>
    )
}
export default Footer;