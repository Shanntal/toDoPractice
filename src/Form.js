// whenever a character is written in the input section of the app, the form re-renders but the rest of the application DOES NOT

import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this); //binding the submit function to this so you can use this.state in the function
    }

    // function that handles when anything is being typed in the input by updating the this.state's text property
    handleChange(ev) {
        this.setState({ text: ev.target.value }) // setting this.state's text with a value of ev.target.value which is whatever is being typed in input
    }

   async handleSubmit(ev) {
       ev.preventDefault();          // when you submit a HTML form, it makes a brand new request everytime (the page refreshes) so you'll want to prevent that
       this.props.submit(this.state.text);     //getting the .submit from props coming in from App.js (when the submit function from the App Component is passed into the Form Component); this.state.text is passed into the submit function in the App component
       this.setState({ text: '' });
    }

    

    render() {
        const { text } = this.state // destructuring text out of this.state to use in value of the input
        return (
            <form onSubmit={this.handleSubmit}>      {/* will trigger the handleSumbit function on this component  */}
                <input 
                    value={text}
                    onChange={(ev) => this.handleChange(ev)}   //every input has an onChange event
                    placeholder='Add New Item...' 
                />
                <button type='submit'>Add New To Do</button>
            </form>
        )
    }
}

export default Form;