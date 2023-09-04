import React from "react"
import { Task } from "../App"

interface toDoListProps {
  tasks: Task[]
}

export default function ToDoList({ tasks }: toDoListProps): JSX.Element {
  console.log('TASKS BEING ADDED', tasks)
  return (
    <h2>This is where the added tasks will render</h2>
  )
} 