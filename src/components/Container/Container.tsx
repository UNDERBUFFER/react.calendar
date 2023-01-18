import React, { useState } from 'react'
import './styles.css'
import { TaskType } from '../Calendar/types'
import TasksContainer from '../TasksContainer/TasksContainer'
import Calendar from '../Calendar/Calendar'

export default function Container() {
  const [seq, updateSeq] = useState(1)
  const [data, setData] = useState<TaskType[]>([])
  const [dayNum, setDayNum] = useState(0)
  const [textInTA, setTA] = useState('')

  const createTask = () => {
    if (dayNum && !textInTA) {
      return
    }

    data.push({
      id: seq,
      text: textInTA,
      dayNum,
    })
    updateSeq(seq + 1)

    setTA('')
    setData(data)
  }

  let tasksByDay: TaskType[] = []
  if (dayNum) {
    tasksByDay = data
      .filter((i) => i.dayNum === dayNum)
      .sort((a, b) => b.id - a.id)
  }

  return (
    <div className='container'>
      <div className='view'>
        {dayNum > 0 && (
          <TasksContainer
            tasks={tasksByDay}
            onCreate={createTask}
            textAreaValue={textInTA}
            onNowChange={(text) => setTA(text)}
            onDelete={(id) => setData(data.filter((i) => i.id !== id))}
          />
        )}
        <Calendar tasks={data} onClick={(dayNum) => setDayNum(dayNum)} />
      </div>
    </div>
  )
}
