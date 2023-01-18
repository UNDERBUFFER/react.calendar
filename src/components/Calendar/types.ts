export type TaskType = {
  id: number
  text: string
  dayNum: number
}

export type CalendarProps = {
  tasks: TaskType[]
  onClick: (day: number) => void
}
