import React, { Component } from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import TodoStatus from './TodoStatus'
import './Todo.css'

class TodoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items:[],
            currentItem: {text:'', key:'', completed:false}    
         }
    }

    inputTodoHandler = (e) =>{
        this.setState({
            currentItem: { 
                text: e.target.value, 
                key:Date.now()
            }
        })
    }

    addItemHandler = (e) => {
        e.preventDefault();
        const newItem = this.state.currentItem;
        if (newItem !==''){ 
            const newtodo=[...this.state.items, newItem];
            this.setState({
                items: newtodo,
                currentItem: {
                    text: '',
                    key:'',
                    completed:false
                }   
            })    
        }
    }

    toogleCheckBox = (key) => {
        this.setState({
            items:this.state.items.filter(item=>{
                if (item.key === key) {
                    item.completed = !item.completed;
                }
                return item;
            })
        })
    }

    itemsLeft = () => {
        return this.state.items.filter((item) => !item.completed);
    }

    render() { 
        return (
            <div className='all-content'>
                <div className='head-box'></div>
                <div className='App'>
                    <header>
                        <h1>TODO</h1>
                        <InputTodo
                            value = {this.state.currentItem.text}
                            inputTodoHandler={this.inputTodoHandler}
                            addItemHandler={this.addItemHandler}
                            disabled={this.state.currentItem.text.length<1}
                        />    
                    </header>
                    <div className='list-container' >
                        <TodoList
                            items={this.state.items}
                            completed={this.state.completed}
                            toogleCheckBox={this.toogleCheckBox}
                        />
                    </div>
                    <div>
                        <TodoStatus
                        itemsLeft = {this.itemsLeft}
                        />
                    </div>
            </div>
        </div>
        );
    }
}
 
export default TodoContainer;