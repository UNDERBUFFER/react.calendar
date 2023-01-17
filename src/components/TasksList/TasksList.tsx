import React from 'react'
import { TasksListProps } from './types'
import './styles.css'

export default function TasksList(props: TasksListProps) {
  return (
    <div className='tasks-list'>
      {props.tasks.map((v) => (
        <div className='task-item' key={v.idx}>
          <button onClick={() => props.onDelete(v.idx)}>X</button>
          <span>{v.val}</span>
        </div>
      ))}
    </div>
  )
}
