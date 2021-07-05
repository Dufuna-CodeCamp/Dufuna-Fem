import React, { Component } from 'react';
import Card from './card';

class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            checked: false,
            list: [],
            inactive: true,
            inactiveCount: 0
        };
    }

    handleCreate = async () => {
        const todo = { name: this.state.name, checked: false }
       
        this.setState({ list: [...this.state.list, todo] })
        this.setState({ inactiveCount: this.state.inactiveCount + 1 })
    }


    handleChange = (event) => {
        const todo = event.target.value
        if (!!todo) {
            this.setState({ name: event.target.value, inactive: false })
        } else {
            this.setState({ inactive: true })
        }
    }

    handleDone = (e, listID) => {
        const checked = e.target.checked
        const item = this.state.list.map((item, index) => {
                if (index === listID) {
                item.checked = !checked ? false : true
                if (!!checked) { this.setState({ inactiveCount: this.state.inactiveCount - 1 }) }
                else { this.setState({ inactiveCount: this.state.inactiveCount + 1 }) }
            }

            return item
        })

         this.setState({ list: item })
    }

    clearCompleted = () => {
        const remainingItems = this.state.list.filter((item) => !item.checked);
        this.setState({ list: remainingItems });
    }

    render() {
        return (

            <div className="mainContainer mt-4 col-md-4 offset-md-4">
                <div className="title">
                    <h1>TODO</h1>
                </div>
                <div className="inputContainer">
                    <input
                        className="form-control"
                        name="name"
                        type="text"
                        onChange={this.handleChange}
                        placeholder="create a new todo..."
                    />

                    <button className="btn btn-primary" onClick={(e) => this.handleCreate(e)} disabled={this.state.inactive} ><b className="icon">+</b></button>
                </div>
                <div className="mt-4 listContainer">
                    <div className="mt-4">
                        {
                            this.state.list.map((todo, index) => <Card onButtonClick={this.handleDone} index={index} todo={todo} key={index} />)
                        }
                    </div>
                </div>
                <div className="actions">
                    <div className="start"><p>{this.state.inactiveCount} Item left</p></div>
                    <div className="middle">
                        <p className="blue">All items</p>
                        <p className="red">Active</p>
                        <p className="green">Completed</p>
                    </div>
                    <div>
                        <p
                            className='end'
                            style={{ cursor: 'pointer' }}
                            onClick={this.clearCompleted}
                        >X Clear Completed
                        </p>
                    </div>
                </div>
            </div>
        );
    }

};



export default Todo;