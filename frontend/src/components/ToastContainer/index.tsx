import React from 'react'
import { ToastMessage } from 'hooks/Toast'
import { useTransition } from 'react-spring'
import { Style } from './styles'
import Toast from './Toast'

interface ToastContainerProps {
  messages: ToastMessage[]
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messageWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    }
  )

  return (
    <Style>
      {messageWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Style>
  )
}

export default ToastContainer
