import React from 'react'

const Form = ({ inputText, setInput, todos, setTodos, setStatus }) => {
   const handleInputChange = (e) => {
   setInput(e.target.value)
  } 

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
    ])
    setInput('')
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
      <form>
      <input 
      type="text" 
      className="todo-input"
      onChange={handleInputChange}
      value={inputText}
      
      />

      <button onClick={handleSubmitTodo} className="todo-button" type='submit'>
          <i className='fas fa-plus-square'></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
        </div>
      </form>
    
  )
}

export default Form
