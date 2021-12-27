// MAIN COMPONENT

import React, { Component } from 'react';
import axios from 'axios';
import TodoContainer from './TodoContainer';
import Form from './Form';

// creating main component
class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: []
        }
        this.changeStatus = this.changeStatus.bind(this); //binding so that way the changeStatus function is binded to the state
    }

    async componentDidMount() {
        const data = (await axios.get('/todos')).data;   //.data is what we pass in the route ourselves      i.e   res.send({ response: 'hello' })      OR      const todos = await Todo.findAll();  res.status(200).send(todos); 
        this.setState({ todos: data });   //setting the original empty todos array in this.state to an array of the data we got from the route '/todos'
    }

    async changeStatus(id, complete) {     // complete is going to be passed the updated status of the todo with that specific id (after being clicked in the TodoContainer component)
        // get id of thing clicked on then send that id to the server, update it then update it in the state
        console.log(id, complete);

        try {
            await axios.put(`/${id}`, { newStatus: complete });  // using .put bc we're UPDATING     // { newStatus: complete }  is the req.body
            // looping through the todo array in this.state, if the complete property has a value of true then make it false and vice versa then return the updated or not update todo to the todo array in this.state
            // .setState triggers a render which updates in real time on the DOM (so no need to refresh page)
            this.setState({
                todos: this.state.todos.map(todo => {
                    if (todo.id === id) {
                        todo.complete = !todo.complete;
                        return todo;
                    }
                    return todo;
                })
            })
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const { todos } = this.state;   //destructing the todos array out of the this.state
        return (
            <div>
                <header>
                    <h1>ToDos</h1>
                </header>
                <Form />
                <div className='container'>
                    <TodoContainer todos={todos.filter(todo => !todo.complete)} changeStatus ={this.changeStatus} />      {/* incomplete todos */}  {/* using the todos deconstructured from this.state */}
                    <TodoContainer todos={todos.filter(todo => todo.complete)} changeStatus={this.changeStatus} />       {/* complete todos */}  {/* using the todos deconstructured from this.state */}
                </div>
            </div>
            
        )
    }
}


// exporting main component
export default App;

