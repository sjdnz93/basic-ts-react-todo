import React from "react"

interface ToDoListFormProps {
  onAddTask: (task: string) => void
}

export default function ToDoListInputForm({ onAddTask }: ToDoListFormProps): JSX.Element {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddTask('make this work')
    console.log('THE BUTTON IS WORKING')

  }







  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="New task"></input>
      <button type="submit">Add Task</button>
    </form>

  )
}