import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo 
            text={todo.text}
            id={todo.id}
            todo={todo}
            completed={todo.completed}
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
