import React, {useState} from 'react'

function TodoInput({addTodoItem}){
    const [value, setValue] = useState('')

    console.log(value)
    
    return(
        <div>
            <form onSubmit={e=>addTodoItem(e, value, setValue)}>
                <input type='text' value={value} onChange={e=>{setValue(e.target.value)}}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default TodoInput