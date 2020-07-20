import React from 'react'

import { ToastMessage } from 'hooks/Toast'
import { Style } from './styles'
import Toast from './Toast'

interface ToastContainerProps {
  messages: ToastMessage[]
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Style>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Style>
  )
}

export default ToastContainer
