export type Route = {
  name: string
  path: string
  component: (...a: any[]) => JSX.Element
  hidden?: boolean
  hideNav?: boolean
  header?: {
    title?: string
  }
}
