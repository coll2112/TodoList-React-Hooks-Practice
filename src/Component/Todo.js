import React, {useState} from 'react'

function Todo({todo, index, removeTodo}){
    return(
        <div key={index}>
            <p>{todo.text}</p>
            <button onClick={()=>{removeTodo(index)}}>Remove Item</button>
        </div>
    )
}

export default Todo