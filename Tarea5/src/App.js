import React, { useState, useEffect } from 'react';
import './App.css';
import Create from './componentes/Create';
import TodoList from './componentes/ToDoList';
import axios from 'axios';

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/tasks")
    .then(response => response.json())
    .then(data => setTodos(data))
  }, [])

  const nuevaTarea = (description) => {
    let cTodos = Object.assign([], todos)
    cTodos.push({description: description, status: 'pending'})
    setTodos(cTodos)
    //post to /tasks
    axios.post('http://localhost:8000/tasks', {description: description, status: 'pending'})
  }

  const finish = (task, id) => {
    let cTodos = Object.assign([], todos)
    cTodos[task].status = 'done'
    setTodos(cTodos)
    axios.post('http://localhost:8000/update/'+id, {id: id})
  }

  const deleteTask = (task, id) => {
    let cTodos = Object.assign([], todos);
    cTodos.splice(task, 1);
    setTodos(cTodos);
    axios.post('http://localhost:8000/delete/'+id, {id: id})
  }

  return (
    <div className="App">
      <Create nuevaTarea={nuevaTarea}/>
      <TodoList todos={todos} finish={finish} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
