import React, { useState } from 'react'
import './styles.css'
import { DayType } from '../Calendar/types'
import Tasks from '../Tasks/Tasks'
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
    if (!dayInfo) {
      return
    }
    const obj = findOrCreateDay(dayInfo.dayNum)
    obj.tasks.push(textInTA)

    setTA('')
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
          <Tasks
            tasks={dayInfo.tasks}
            onCreate={createTask}
            textAreaValue={textInTA}
            onNowChange={(text: string) => {setTA(text)}}
          />
        ) : null}
        <Calendar days={days} onClick={renderTasksByDay} />
      </div>
    </div>
  )
}
