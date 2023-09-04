import React, { useRef } from "react"

interface ToDoListFormProps {
  onAddTask: (task: string) => void
}

export default function ToDoListInputForm({ onAddTask }: ToDoListFormProps): JSX.Element {

  const taskRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const taskVal = taskRef.current!.value
    //console.log('TASKVAL', taskVal)
    onAddTask(taskVal)
    //console.log('THE BUTTON IS WORKING')

  }







  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="New task" ref={taskRef}></input>
      <button type="submit">Add Task</button>
    </form>

  )
}