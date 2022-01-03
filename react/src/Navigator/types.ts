export type Route = {
  name: string
  path: string
  component: React.ComponentType<any> | undefined
  hidden?: boolean
  hideNav?: boolean
  header?: {
    title?: string
  }
}
