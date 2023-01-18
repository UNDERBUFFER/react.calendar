import { TaskType } from '../Calendar/types'

export type TasksListProps = {
  tasks: Pick<TaskType, 'id' | 'text'>[]
  onDelete: (id: number) => void
}
