import { useState } from "react";
import react from 'react';

const Todo = () => {

  const [task, setTasks] = useState(null);

  const handleInput = (e) => {
    newTasks = {
        body:e.target.value,
    }

    setTasks(...task, newTasks);
  }
  return (
    <div>
      <input onClick={handleInput} placeholder="Enter task..."  />
      {task}
    </div>
  )
}

export default Todo