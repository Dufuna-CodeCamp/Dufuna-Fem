import React, { Component } from 'react';
import './Todos.css';
import Input from '../Input/Input.';
import Button from '../Button/Button';

class Todos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerms: [],
            newItem: "",
            completed: false,
            display: 'none',
        };
    }

    updateInput = (key, value) => {
        this.setState({ [key]: value });
    }
    addItem = () => {
        const newItem = {
            id: 1 + Math.random(),
            completed: this.state.completed,
            value: this.state.newItem.slice()
        }

        const searchTerms = [...this.state.searchTerms];
        searchTerms.push(newItem);
        this.setState({ searchTerms, newItem: "" });

        this.state.display = 'inline';

        Array.from(document.querySelectorAll('input')).forEach(
            input => (input.value = "")
        );
    }
    handleCheck = (id) => {
        this.setState({
            searchTerms: this.state.searchTerms.filter((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }),
        });
    };

    itemsLeft = () => {
        return this.state.searchTerms.filter((item) => !item.completed);
    }

    clearCompletedTodos = () => {
        const removetodos = this.state.searchTerms.filter(todo => todo.completed === false)
        this.setState({
            searchTerms: removetodos
        })
    }
    render() {
        const box = {
            textDecoration: "line-through",
            color: "green"
        }

        return (
            <div>
                <header className="header">
                    <h2>TODO</h2>
                    <Input
                        name="searchTerm"
                        inputType="text"
                        placeholder="Create a new todos..."
                        handleChange={e => this.updateInput("newItem", e.target.value)}
                        value={this.state.newItem}

                    />
                    <Button
                        disabled={!this.state.newItem}
                        handleChange={() => this.addItem()}
                    />
                </header>
                <div className="content-wrapper" style={{ display: this.state.display }}>
                    <ul>
                        {this.state.searchTerms.map((item, index) => {
                            return (
                                <li className="list-style red" key={item.id} style={item.completed ? box : null}
                                >
                            {item.value}
                            <input className="checkbox"
                            checked={this.state.completed[index]}
                                    type="checkbox" onChange={() => this.handleCheck(item.id)}                                    />
                              </li>
                            )
                        })}

                    </ul>
                    <div style={{ display: this.state.display }} >
                        <ul className="footer">
                            <li>{this.itemsLeft().length} items left</li>
                            <li>All items</li>
                            <li>Active</li>
                            <li>Completed</li>
                            <li onClick={this.clearCompletedTodos} > <i className="fa fa-times"></i> Clear Completed</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default Todos;