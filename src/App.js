import React, {useState} from 'react';
import Todo from './Component/Todo'
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

  const removeTodo=index=>{
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <div>
        {todos.map((todo, index)=>(
          <Todo key={index} index={index} todo={todo} removeTodo={removeTodo}/>
        ))}
      </div>
    </div>
  );
}

export default App;
