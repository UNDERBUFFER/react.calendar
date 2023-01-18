import React from 'react'
import { TasksListProps } from './types'
import './styles.css'

export default function TasksList(props: TasksListProps) {
  return (
    <div className='tasks-list'>
      {props.tasks.map((v) => (
        <div className='task-item' key={v.id}>
          <button onClick={() => props.onDelete(v.id)}>X</button>
          <span>{v.text}</span>
        </div>
      ))}
    </div>
  )
}
