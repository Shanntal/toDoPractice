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
        this.changeStatus = this.changeStatus.bind(this); //binding so that way the changeStatus function is binded to the state and you can use this.state in the function
        this.submit = this.submit.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    async componentDidMount() {
        const data = (await axios.get('/todos')).data;   //.data is what we pass in the route ourselves      i.e   res.send({ response: 'hello' })      OR      const todos = await Todo.findAll();  res.status(200).send(todos); 
        this.setState({ todos: data });   //setting the original empty todos array in this.state to an array of the data we got from the route '/todos'
    }

    async changeStatus(id, complete) {     // complete is going to be passed the updated status of the todo with that specific id (after being clicked in the TodoContainer component)
        // get id of thing clicked on then send that id to the server, update it then update it in the state
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

    async deleteTodo(id) {
        try {
            await axios.delete(`/${id}`);     // is not deleteTodo bc .delete is a built in method used to delete
            this.setState({todos: this.state.todos.filter(todo => todo.id !== id)});      //sets this.state.todos to an array that does not include the to do that is being deleted based on the id  ->  allows for the to do to delete immediately from the DOM when the x button is clicked instead of needing to refresh the page
        } catch (err) {
            console.log(err);
        }
    }

    async submit(text) {              // text is being passed in from the Form Component
        const newTodo = (await axios.post('/create', { text: text })).data    //{ text: text } can also be written as { text }; setting the new todo's  (that is being created in the database) text property to the text passed into submit from the Form Component; { text: text } is going to be the req.body that gets read in the server file
        this.setState({todos: [...this.state.todos, newTodo]});    // will set this App Component's state to a new state that includes the new todo so that it will display on the DOM without refreshing the page
    }

    render() {
        const { todos } = this.state;   //destructing the todos array out of the this.state
        return (
            <div>
                <header>
                    <h1>To Dos</h1>
                </header>
                <Form submit={this.submit}/>        {/* triggers the submit function on this component but passes it into the Form Component first */}
                <div className='container'>
                    <TodoContainer 
                    todos={todos.filter(todo => !todo.complete)} 
                    changeStatus = {this.changeStatus}       //i ncomplete todos;     using the todos deconstructured from this.state 
                    deleteTodo = {this.deleteTodo} />

                    <TodoContainer 
                    todos={todos.filter(todo => todo.complete)} 
                    changeStatus={this.changeStatus}       // complete todos;      using the todos deconstructured from this.state
                    deleteTodo = {this.deleteTodo} />
                </div>
            </div>
            
        )
    }
}


// exporting main component
export default App;

