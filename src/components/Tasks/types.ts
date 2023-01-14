export type TasksProps = {
  tasks: string[]
  textAreaValue: string
  onCreate: () => void
  onNowChange: (text: string) => void
}