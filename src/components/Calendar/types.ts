export type DayType = {
  dayNum: number
  tasks: string[]
}

export type CalendarProps = {
  days: DayType[]
  onClick: (day: number) => void
}
