// import { useState } from "react";

// const Todo = () => {

//   const [task, setTasks] = useState(null);

//   const handleInput = (e) => {
//     newTasks = {
//         body:e.target.value,
//     }

//     setTasks(...task, newTasks);
//   }
//   return (
//     <div>
//       <input onClick={handleInput} placeholder="Enter task..."  />
//       {task}
//     </div>
//   )
// }

// export default Todo

// =============================== 2nd approach

import React from 'react'
import { useState } from 'react'

function TodoList () {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

function handleChange(e){
  setInputValue(e.target.value)
}

function handleSubmit(e){
  e.preventDefault()
  setTodos([...todos, inputValue])
  setInputValue('')
}

function handleDelete(index){
  const newTodos = [...todos]
  newTodos.splice(index, 1)
  setTodos(newTodos)
}
  return (
    <div>
      <h1>Todo List</h1>
      <form>
        <input type='text' value={inputValue} onChange={handleChange}/>
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}
          <button onClick={() =>handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;