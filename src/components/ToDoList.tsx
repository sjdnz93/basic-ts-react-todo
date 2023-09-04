import React from "react"
import { Task } from "../App"

interface toDoListProps {
  tasks: Task[]
}

export default function ToDoList({ tasks }: toDoListProps): JSX.Element {
  console.log('TASKS BEING ADDED', tasks)
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.task}</li>
        )
        )}
      </ul>
    </div>
  )
} 