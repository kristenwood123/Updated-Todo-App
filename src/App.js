import React, { useState } from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInput] = useState('')
  const [todos, setTodos] = useState([])

 
  return (
    <div className="App">
      <header>
        <h1>Kristen's Todo List</h1>
      </header>
        <Form 
        inputText={inputText}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        />
        <TodoList
        todos={todos}
        setTodos={setTodos}
        />
      
    </div>
  );
}

export default App;
