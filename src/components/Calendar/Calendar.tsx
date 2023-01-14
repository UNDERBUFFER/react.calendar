import React from 'react'
import { CalendarProps } from './types'
import './styles.css'

export default function Calendar(props: CalendarProps) {
  const dayItems = [...Array(31).keys()]
    .map((i) => i + 1)
    .map((dayNum) => {
      const day = props.days.find((i) => i.dayNum === dayNum)
      return (
        <div
          className='calendar-item'
          onClick={() => props.onClick(dayNum)}
          key={dayNum}
        >
          <div className='day-events'>{day?.tasks?.length || 0}</div>
          <div className='day-number'>{dayNum}</div>
        </div>
      )
    })

  return (
    <div className='calendar-container'>
      <div className='calendar-border'>{dayItems}</div>
    </div>
  )
}
