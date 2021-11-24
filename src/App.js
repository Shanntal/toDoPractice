import React, { Component} from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <header>
                    <h1>To Do</h1>
                </header>

                <div className='todo-container'>

                </div>

            </div>
        )
    }
}

export default App;