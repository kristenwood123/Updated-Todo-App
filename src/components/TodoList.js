import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo 
            text={todo.text}
            id={todo.id}
            todo={todo}
            completed={todo.Completed}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
