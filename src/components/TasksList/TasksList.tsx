import React from 'react'
import { TasksListProps } from './types'
import './styles.css'

export default function TasksList(props: TasksListProps) {
  let data = props.tasks.map((v, i) => ({ val: v, idx: i }))

  if (props.tasksOnPage && props.currentPage) {
    data = data.slice(
      props.currentPage * props.tasksOnPage,
      (props.currentPage + 1) * props.tasksOnPage,
    )
  }

  return (
    <div className='tasks-list'>
      {data.map((v) => (
        <div className='task-item' key={v.idx}>
          <button onClick={() => props.onDelete(v.idx)}>X</button>
          <span>{v.val}</span>
        </div>
      ))}
    </div>
  )
}
