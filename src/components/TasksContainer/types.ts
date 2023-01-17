export type TasksContainerProps = {
  tasks: string[]
  textAreaValue: string
  onCreate: () => void
  onNowChange: (text: string) => void
  onDelete: (id: number) => void
}