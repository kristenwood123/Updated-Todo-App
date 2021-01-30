import React from 'react'

const Form = ({ setInput, todos, setTodos }) => {
   const handleInputChange = (e) => {
   setInput(e.target.value)
  } 

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    setTodos([])
  }

  return (
      <form>
      <input 
      type="text" 
      className="todo-input"
      onChange={handleInputChange}
      />
      <button onClick={handleSubmitTodo} className="todo-button" type='submit'>
          <i className='fas fa-plus-square'></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
        </div>
      </form>
    
  )
}

export default Form
