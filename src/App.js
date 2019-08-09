import React, {useState} from 'react';
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

  return (
    <div className="App">
      <div>
        {todos.map((todo, index)=>(
          <p key={index}>{todo.text}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
