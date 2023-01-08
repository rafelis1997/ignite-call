import { CSSProperties, ReactNode, useRef } from 'react'
import { useIsElementVisible } from '../../hooks/useIsElementVisible'

interface Props {
  children: ReactNode
  from: CSSProperties
  to: CSSProperties
}

export function Animation({ children, from, to }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const isOnScreen = useIsElementVisible({ ref })
  const defaultStyles: CSSProperties = {
    transition: '600ms ease-in-out',
    ...from,
  }

  return (
    <div
      ref={ref}
      style={!isOnScreen ? { ...defaultStyles } : { ...defaultStyles, ...to }}
    >
      {children}
    </div>
  )
}
