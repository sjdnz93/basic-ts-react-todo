import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import ToDoListInputForm from './components/ToDoListInputForm';
import { v4 as getId } from "uuid";

export interface Task {
  id: string,
  task: string
}


function App(): JSX.Element {

  const [tasks, setTasks] = useState<Task[]>([])
  const addTask = (task: string) => {
    console.log('YOURE HITTING THE COMPONTENT NOW')
    setTasks([...tasks, { id: getId(), task }])
  }

  return (
    <div>
      <h1>Simon's basic React/TS todo list</h1>

      <ToDoList tasks={tasks}/>
      <ToDoListInputForm onAddTask={addTask}/>

    </div>
  );
}

export default App;
