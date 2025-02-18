import React, { useEffect } from 'react'
import './App.css'
import TaskForm from "./components/TaskForm";
import TaskColumn from './components/TaskColumn';
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'
import { useState } from 'react';

const oldTasks = localStorage.getItem('tasks');

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || [])
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])
  
  console.log(tasks);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  }
  
  return (
    <div className="app">
      <TaskForm setTasks = {setTasks}/>
      <main className="app_main">
        <TaskColumn tasks={tasks} status="todo" title = "ToDo" icons = {todoIcon} handleDelete = {handleDelete}/>
        <TaskColumn tasks={tasks} status="doing" title = "Doing" icons = {doingIcon} handleDelete = {handleDelete}/>
        <TaskColumn tasks={tasks} status="done" title = "Done" icons = {doneIcon} handleDelete = {handleDelete}/>
      </main>
    </div>
  )
}

export default App