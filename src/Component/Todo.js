import React from 'react'

function Todo({todo, index, removeTodo}){
    return(
        <div>
            <p>{todo.text}</p>
            <button onClick={()=>{removeTodo(index)}}>Remove</button>
        </div>
    )
}

export default Todo