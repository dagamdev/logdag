declare interface SVGIconComponent extends React.ComponentProps<'svg'> {
  iconStyle?: 'fill' | 'outline'
}

declare interface Log {
  id: string
  title: string
  eventDate: string
  groupId?: string
  description?: string
}

declare interface LogGroup {
  id: string
  name: string
  description?: string
  createdAt: string
}
