import React, { useState } from 'react'
import './styles.css'
import { DayType } from '../Calendar/types'
import TasksContainer from '../TasksContainer/TasksContainer'
import Calendar from '../Calendar/Calendar'

export default function Container() {
  const [days, setDays] = useState<DayType[]>([])
  const [dayInfo, setDay] = useState<DayType | null>(null)
  const [textInTA, setTA] = useState('')

  const findOrCreateDay = (dayNum: number) => {
    let obj = days.find((i) => i.dayNum === dayNum)
    if (!obj) {
      obj = { dayNum, tasks: [] }
      days.push(obj)
    }
    return obj
  }

  const renderTasksByDay = (dayNum: number) => {
    const obj = findOrCreateDay(dayNum)
    setDays(days)
    setDay(obj)
  }

  const createTask = () => {
    if (!dayInfo || !textInTA) {
      return
    }
    const obj = findOrCreateDay(dayInfo.dayNum)
    obj.tasks.unshift(textInTA)

    setTA('')
    setDays(days)
    setDay((i) => ({
      ...i,
      ...obj,
    }))
  }

  const deleteTask = (idx: number) => {
    if (!dayInfo) {
      return
    }
    const obj = findOrCreateDay(dayInfo.dayNum)
    obj.tasks.splice(idx, 1)

    setDays(days)
    setDay((i) => ({
      ...i,
      ...obj,
    }))
  }

  return (
    <div className='container'>
      <div className='view'>
        {dayInfo ? (
          <TasksContainer
            tasks={dayInfo.tasks}
            onCreate={createTask}
            textAreaValue={textInTA}
            onNowChange={(text: string) => {
              setTA(text)
            }}
            onDelete={deleteTask}
          />
        ) : null}
        <Calendar days={days} onClick={renderTasksByDay} />
      </div>
    </div>
  )
}
