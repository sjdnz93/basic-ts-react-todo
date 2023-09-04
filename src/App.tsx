import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import ToDoListInputForm from './components/ToDoListInputForm';

export interface Task {
  id: number,
  task: string,
  quantity: number
}


function App(): JSX.Element {

  const [task, setTask] = useState<Task[]>([])
  const addTask = (task: string) => {
    console.log('YOURE HITTING THE COMPONTENT NOW')
  }

  return (
    <div>
      <h1>Hello world!</h1>

      <ToDoList tasks={task}/>
      <ToDoListInputForm onAddTask={addTask}/>

    </div>
  );
}

export default App;
