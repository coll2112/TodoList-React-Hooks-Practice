import React, {useState} from 'react';
import Todo from './Component/Todo'
import TodoInput from './Component/TodoInput'
import { validate } from '@babel/types';
// import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      text:'Item 1', 
      isComplete: false
    },
    {
      text:'Item 2', 
      isComplete: false
    },
    {
      text:'Item 3', 
      isComplete: false
    }
  ]);

  // Removes an Item from List
  const removeTodo=index=>{
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos)
  }

  // Adds and Item to List
  const addTodoItem=(e, text, setValue)=>{
    e.preventDefault();
    const newTodos=[...todos, {text}];
    setTodos(newTodos)
    setValue('')
  }

  return (
    <div className="App">
      <div>
        {todos.map((todo, index)=>(
          <Todo key={index} index={index} todo={todo} removeTodo={removeTodo}/>
        ))}
        <TodoInput addTodoItem={addTodoItem}/>
      </div>
    </div>
  );
}

export default App;
