import React, { useState } from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

 
  return (
    <div className="App">
      <header>
        <h1>Kristen's Todo List</h1>
      </header>
        <Form 
        setInput={setInput}
        />
        <TodoList
        todos={todos}
        setTodos={setTodos}
         />
      
    </div>
  );
}

export default App;
