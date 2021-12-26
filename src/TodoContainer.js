import React from 'react';

// creating component that will display all todos that have NOT been completed
const TodoContainer = ( { todos }) => {      // todos is being passed in in the App component when the Incomplete component is being used
    return (
        <div className='todo-container'>
            {
                todos.map(todo => {
                    return (
                        <div key={todo.id} className='card'>
                            <h4 className={todo.complete ? 'strike-through' : ''}>{todo.text}</h4>  {/*  conditional className,    IF   the todo.complete = true then give it the className='strike-though'   ELSE   give it className=''   */}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoContainer;