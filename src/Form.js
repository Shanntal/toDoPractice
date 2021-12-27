import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            text: '',
        }
    }

    handleChange(ev) {
        this.setState({ text: ev.target.value }) // setting this.state's text with a value of ev.target.value which is whatever is being typed in input
    }


    render() {
        console.log(this.state)
        const { text } = this.state // destructuring text out of this.state to use in value of the input
        return (
            <form>
                <input 
                    value={text}
                    onChange={(ev) => this.handleChange(ev)}   //every input has an onChange event
                    placeholder='Add New Item...' 
                />
                <button>Add New To Do</button>
            </form>
        )
    }
}

export default Form;