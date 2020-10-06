import React, { useState } from 'react'

const Create = ({nuevaTarea}) => {
  const [todo, setTodo] = useState('Valor predeterminado');

  const handleTodoChange = (event) => {
    let val = event.target.value;
    setTodo(val)
  }

  const handleCreateClick = (event) => {
    nuevaTarea(todo)
    setTodo('')
  }

  return (
    <div>
      <label htmlFor="create-form"></label>
      <input type="text" value={todo} onChange={handleTodoChange}/>
      <input type="button" value="Create" onClick={handleCreateClick}/>
    </div>
  )
}

export default Create;
