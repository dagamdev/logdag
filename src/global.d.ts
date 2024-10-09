declare interface SVGIconComponent extends React.ComponentProps<'svg'> {
  iconStyle?: 'fill' | 'outline'
}

declare interface User extends import('./types').CreateUserData {
  id: string
  createdAt: string
  updatedAt: string
}

declare interface Log {
  id: string
  name: string
  content: string | null
  eventDate: string
  group: LogGroup | null
  createdAt: string
  updatedAt: string
}

declare interface LogGroup {
  id: string
  name: string
  description: string | null
  createdAt: string
  logsAmount: number
}
