// MAIN COMPONENT

import React, { Component } from 'react';
import axios from 'axios';
import TodoContainer from './TodoContainer';


// creating main component
class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: []
        }
    }

    async componentDidMount() {
        const data = (await axios.get('/todos')).data;   //.data is what we pass in the route ourselves      i.e   res.send({ response: 'hello' })      OR      const todos = await Todo.findAll();  res.status(200).send(todos); 
        this.setState({ todos: data });   //setting the original empty todos array in this.state to an array of the data we got from the route '/todos'
    }


    render() {
        const { todos } = this.state;   //destructing the todos array out of the this.state
        return (
            <div>
                <header>
                    <h1>ToDos</h1>
                </header>
                <div className='container'>
                    <TodoContainer todos={todos.filter(todo => !todo.complete)} />      {/* incomplete todos */}  {/* using the todos deconstructured from this.state */}
                    <TodoContainer todos={todos.filter(todo => todo.complete)} />       {/* complete todos */}  {/* using the todos deconstructured from this.state */}
                </div>
            </div>
            
        )
    }
}


// exporting main component
export default App;

