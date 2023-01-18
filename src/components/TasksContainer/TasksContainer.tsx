import React, { useState } from 'react'
import { TasksContainerProps } from './types'
import './styles.css'
import PaginationConfig from '../PaginationConfig/PaginationConfig'
import TasksList from '../TasksList/TasksList'
import TasksForm from '../TasksForm/TasksForm'
import Pagination from '../Pagination/Pagination'

export default function TasksContainer(props: TasksContainerProps) {
  let pagesCount = 1
  let data = props.tasks

  const [usePagination, triggerPagination] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [tasksOnPage, setTasksOnPage] = useState(5)

  if (usePagination) {
    pagesCount = Math.ceil(data.length / tasksOnPage)

    data = data.slice(
      Math.max(currentPage - 1, 0) * tasksOnPage,
      currentPage * tasksOnPage,
    )
  }

  return (
    <div className='tasks-container'>
      <TasksForm
        textAreaValue={props.textAreaValue}
        onCreate={() => {
          props.onCreate()
          setCurrentPage(1)
        }}
        onNowChange={props.onNowChange}
      />

      <PaginationConfig
        selected={usePagination}
        onCBChange={() => {
          triggerPagination(!usePagination)
        }}
        onInputChange={(val) => {
          setTasksOnPage(val)
          setCurrentPage(1)
        }}
      />

      <TasksList
        tasks={data}
        onDelete={(idx) => {
          props.onDelete(idx)
          setCurrentPage(1)
        }}
      />

      {usePagination && !!props.tasks.length && (
        <Pagination
          currentPage={currentPage}
          pagesCount={pagesCount}
          onLast={() => setCurrentPage(currentPage - 1)}
          onNext={() => setCurrentPage(currentPage + 1)}
        />
      )}

      <div className='indent'></div>
    </div>
  )
}
