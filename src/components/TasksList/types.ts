export type TasksListProps = {
  tasks: string[]
  currentPage: number | null
  tasksOnPage: number | null
  onDelete: (id: number) => void
}