import React from 'react';
import './estilo.css'

const ToDo = ({todo, task, finish, mDelete}) => {
  return(
    <tr key={task} style={{backgroundColor: todo.status === 'pending' ? 'green' : 'gray'}}>
      <td align="center">Task {task+1}</td>
      <td align="center">{todo.description}</td>
      <td align="center">
        {todo.status === 'pending' && (
          <input type="button" value="Completed" onClick={(event) => finish(event, task, todo.id)}/>
        ) }
      </td>
      <td align="center"><input type="button" value="Delete" onClick={(event) => mDelete(event, task, todo.id)}/></td>
    </tr>
  )
}

export default ToDo;