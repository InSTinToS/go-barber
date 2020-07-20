import React from 'react'
import { Style } from './styles'

interface TooltipProps {
  title: string
  className?: string
}

const Tooltip: React.FC<TooltipProps> = ({ children, className, title }) => {
  return (
    <Style className={className}>
      {children}
      <span>{title}</span>
    </Style>
  )
}

export default Tooltip
