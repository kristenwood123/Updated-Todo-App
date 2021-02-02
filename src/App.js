import React, { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {

  //State stuff
  const [inputText, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('All')
  const [filteredTodos, setfilteredTodos] = useState([])

  useEffect(() => {
    filterHandler()
  }, [todos, status])

  //Functions
  const filterHandler = (e) => {
    switch(status){
      case 'completed':
        setfilteredTodos(todos.filter(todo => todo.completed === true))
        break;
        case 'uncompleted':
          setfilteredTodos(todos.filter(todo => todo.completed === false))
          break;
          default:
          setfilteredTodos(todos);
          break
    }
  }

 
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
        setStatus={setStatus}
        />
        <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        />
      
    </div>
  );
}

export default App;
