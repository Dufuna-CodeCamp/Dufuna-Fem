import React, {Component}from 'react';
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

    componentDidMount() {
        this.populate()
    }

    handleCreate = async () => {
        const list = JSON.parse(localStorage.getItem("@list"))
        const todo =  { name: this.state.name, checked: false }
        if (!list) {
            localStorage.setItem("@list", JSON.stringify([todo]))
        } else {
            await list.unshift(todo)
            this.setState({list: list})
            localStorage.setItem("@list", JSON.stringify(list))
        }

        this.setState({inactiveCount: this.state.inactiveCount + 1 })
      
    }

    populate = () => {
        let inactiveCount = 0;
        const list = JSON.parse(localStorage.getItem("@list"))
        list.forEach(item => {
            if(!item.checked) {
                inactiveCount++;
            }
        })
        console.log("INAC: ", inactiveCount)
        this.setState({list: list, inactiveCount: inactiveCount})
    }
    
    handleChange = (event) => {
        const todo =  event.target.value
        if (!!todo) {
            this.setState({name : event.target.value, inactive: false})
        } else {
            this.setState({inactive: true})
        }
    }

    handleDone = (e, listID) => {
        const checked =  e.target.checked
        const list = JSON.parse(localStorage.getItem("@list"))
        const item = list.map((item, index) => {
            console.log("LIST 2: ", index)
            if (index === listID) {
                item.checked = !checked ? false : true
                if(!!checked) { this.setState({inactiveCount: this.state.inactiveCount - 1}) }
                else { this.setState({inactiveCount: this.state.inactiveCount + 1}) }
            }

            return item
        })

        console.log("LIST: ", item)
        this.setState({list: item})
        localStorage.setItem("@list", JSON.stringify(list))
    }

    render () {
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
                        
                        <button className="btn btn-primary" onClick={(e) => this.handleCreate(e)} disabled={this.state.inactive} >+</button>                                                                                                    
                </div>
                <div className="mt-4 listContainer">
                    <div className="mt-4">
                        {
                            this.state?.list?.map((todo, index) => <Card onButtonClick={this.handleDone} index={index} todo={todo} key={index} />)
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
                        <p className='end'>X Clear Completed</p>
                        </div>
                </div>
            </div>
        );
}

};



export default Todo;