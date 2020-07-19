import React, { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'
import { Style } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  return (
    <Style>
      {Icon && <Icon />}
      <input {...rest} />
    </Style>
  )
}

export default Input
