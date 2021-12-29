import React from 'react';


// creating component that will display all todos that have NOT been completed
const TodoContainer = ( { todos, changeStatus, deleteTodo }) => {      // todos is being passed in in the App component when the Incomplete component is being used
    return (
        <div className='todo-container'>
            {
                todos.map(todo => {
                    return (
                        <div key={todo.id} className='card' onClick={() => changeStatus(todo.id, !todo.complete)}>  {/* when clicked the chnageStatus function will be passed in an updated status of the todo with that speicifc id    i.e.  if false then true & vice versa  */}
                            <h4 className={todo.complete ? 'strike-through' : ''}>{todo.text}</h4>  {/*  conditional className,    IF   the todo.complete = true then give it the className='strike-though'   ELSE   give it className=''   */}
                            <button onClick = {() => deleteTodo(todo.id)}>X</button>

                            {/* { todo.complete && <button>X</button>}  ->   Conditional if I wanted only the complete to dos to have this button; how you write a if statement in JSX, ternary statement;    i.e.  if (todo.complete) {<button>X</button>}     ->   if todo.complete === true  then create a button with an 'X' on it    */}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoContainer;