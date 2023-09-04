import React, { useRef } from "react"

interface ToDoListFormProps {
  onAddTask: (task: string) => void
}

export default function ToDoListInputForm({ onAddTask }: ToDoListFormProps): JSX.Element {

  const taskRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const taskVal = taskRef.current!.value
    if (taskVal) {
      onAddTask(taskVal)
      taskRef.current!.value = ''
    } else {
      window.alert('YOU NEED TO ADD A TASK')
    }
    

  }







  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="New task" ref={taskRef}></input>
      <button type="submit">Add Task</button>
    </form>

  )
}