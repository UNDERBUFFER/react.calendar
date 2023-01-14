import React from 'react'
import { TasksProps } from './types'
import './styles.css'

export default function Tasks(props: TasksProps) {
  return (
    <div className='tasks-container'>
      <form
        className='task-form'
        action=''
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <textarea
          value={props.textAreaValue}
          onChange={(e) => props.onNowChange(e.target.value)}
        />
        <button onClick={props.onCreate}>Отправить</button>
      </form>

      {props.tasks.map((val, idx) => (
        <div className='task-item' key={idx}>
          <button>X</button>
          <span>{val}</span>
        </div>
      ))}
    </div>
  )
}
