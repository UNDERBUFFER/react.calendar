export type TasksListProps = {
  tasks: {val: string, idx: number}[]
  onDelete: (id: number) => void
}