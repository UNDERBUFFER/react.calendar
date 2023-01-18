import { TaskType } from '../Calendar/types'

export type TasksContainerProps = {
  tasks: Pick<TaskType, 'id' | 'text'>[]
  textAreaValue: string
  onCreate: () => void
  onNowChange: (text: string) => void
  onDelete: (id: number) => void
}
