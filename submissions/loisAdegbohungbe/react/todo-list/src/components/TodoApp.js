import React, { Component } from 'react';
import Input from './InputHeader';
import TodoItems from './TodoItems';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            buttonDisabled: true,
            addItem: false
        }
    }

    handleInputChange = (event) => {
        this.setState({ addItem: false });
        event.target.value.length > 0 ?
            this.setState({ buttonDisabled: false }) : this.setState({ buttonDisabled: true });
        this.setState({ [event.target.name]: event.target.value });
    }

    addItem = () => {
        if (!this.state.buttonDisabled) {
            this.setState({
                item: { title: this.state.item, isActive: true },
                addItem: true
            })
        }
    }

    reset = () => {
        this.setState({ item: '', buttonDisabled: true });
    }

    render() {
        return (
            <div >
                <Input
                    placeholder='Create a new todo...'
                    onChange={this.handleInputChange}
                    name='item'
                    value={this.state.item}
                    handleAddClick={this.addItem}
                    buttonDisabled={this.state.buttonDisabled}
                />
                <TodoItems
                    item={this.state.addItem ? this.state.item : undefined}
                    onAdd={this.reset}
                />
            </div>
        )
    }
}

export default TodoApp;