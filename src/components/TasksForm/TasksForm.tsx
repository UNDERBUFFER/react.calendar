import React from 'react'
import { TasksFormProps } from './types'
import './styles.css'

export default function TasksForm(props: TasksFormProps) {
  return (
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
  )
}
