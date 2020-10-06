import React from 'react';
import Todo from './ToDo';

const ToDoList = ({todos, finish, deleteTask}) => {

  const handleMarkAsDone = (event, index, id) => {
    finish(index, id)
  }

  const handleDelete = (event, index, id) => {
    deleteTask(index, id);
  }

  return(
    
      <table>
      <tr>
      <th>#</th>
      <th>Task</th>
      <th>Complete</th>
      <th>Delete</th>
      </tr>
      <tr>
      {todos.map((todo, i) => {
        return(
          <Todo todo={todo} task={i} finish={handleMarkAsDone} mDelete={handleDelete}/>
        )
      })}
      </tr>
      </table>
    
  )
}
export default ToDoList;