import React, { Component } from 'react';
import Footer from './ItemsFooter';
import './styles/todo.css';


class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.item) {
            this.setState({
                items: [...this.state.items, nextProps.item]
            });
            nextProps.onAdd();
        }
    }

    remainingItemsCount = () => {
        const remainingItemsArray = this.state.items.length > 0
            && this.state.items.filter((item) => item.isActive);
        return remainingItemsArray.length || 0;
    }

    clearCompletedItems = () => {
        this.setState({ items: [...this.state.items.filter((item) => item.isActive)] });
    }

    render() {
        return (
            <div
                style={{
                    backgroundColor: '#f7cb15',
                    paddingTop: '40px'
                }}
                id='todo-items'
            >
                {this.state.items.length > 0
                    ? this.state.items.map((item, index) => {
                        const toggleStatus = () => {
                            this.setState({
                                items: [...this.state.items.slice(0, index),
                                { ...this.state.items[index], isActive: !item.isActive },
                                ...this.state.items.slice(index + 1)]
                            });
                        }

                        return (
                            <div
                                className={'d-flex justify-content-between flex-wrap pl-3 mb-3 pr-3 pt-3 pb-3'}
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '14px',
                                    width: '85%',
                                    margin: '0 auto'
                                }}
                                key={index}
                            >
                                <span id={!item.isActive ? 'done-task' : ''}>{item.title}</span>
                                <span style={{ position: 'relative' }}>
                                    <input type="checkbox" onClick={toggleStatus} className='checkbox' />
                                    <label htmlFor="checkbox" className={!item.isActive ? 'label-checked' : 'label-not-checked'}></label>
                                </span>
                            </div>
                        )
                    })
                    : <p className='text-center'>No item has been added</p>
                }
                <div className='justify-content-between flex-wrap' id='sm-footer'>
                    <span style={{ color: '#484349' }}>
                        {this.remainingItemsCount() + ' '} 
                        item{this.remainingItemsCount() > 1 ? 's' : ''} left
                    </span>
                    <button
                        style={{ color: '#D32F2F' }}
                        onClick={this.clearCompletedItems}>✘ Clear Completed
                    </button>
                </div>
                <Footer
                    style={{
                        backgroundColor: 'white',
                    }}
                    remainingItems={this.remainingItemsCount()}
                    onClear={this.clearCompletedItems}
                    className='shadow p-2 mb-5 mt-4 bg-white'
                />
            </div>
        )
    }
}

export default Todos;