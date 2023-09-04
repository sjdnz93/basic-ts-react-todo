import React from 'react';
import ToDoList from './components/ToDoList';
import ToDoListInputForm from './components/ToDoListInputForm';


function App(): JSX.Element {
  return (
    <div>
      <h1>Hello world!</h1>

      <ToDoList />
      <ToDoListInputForm />

    </div>
  );
}

export default App;
