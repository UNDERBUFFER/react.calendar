import React, { useState } from 'react'
import { TasksContainerProps } from './types'
import './styles.css'
import PaginationConfig from '../PaginationConfig/PaginationConfig'
import TasksList from '../TasksList/TasksList'
import TasksForm from '../TasksForm/TasksForm'

export default function TasksContainer(props: TasksContainerProps) {
  const [usePagination, triggerPagination] = useState(false)
  const [tasksOnPage, setTasksOnPage] = useState<number | null>(null)

  return (
    <div className='tasks-container'>
      <TasksForm
        textAreaValue={props.textAreaValue}
        onCreate={props.onCreate}
        onNowChange={props.onNowChange}
      />

      <PaginationConfig
        selected={usePagination}
        onCBChange={() => {
          triggerPagination(!usePagination)
          if (!usePagination) {
            setTasksOnPage(null)
          }
        }}
        onInputChange={(pc: number) => setTasksOnPage(pc)}
      />

      <TasksList
        tasks={props.tasks}
        onDelete={props.onDelete}
        currentPage={0}
        tasksOnPage={tasksOnPage}
      />
    </div>
  )
}
