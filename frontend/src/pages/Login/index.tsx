import React from 'react'
import logo from 'assets/logo.svg'
import Button from 'components/Button'
import Input from 'components/Input'
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi'
import { Style, Content, Background } from './styles'

const Login: React.FC = () => {
  return (
    <Style>
      <Content>
        <img src={logo} alt='Go Barber' />
        <form>
          <h1>Faça seu logon</h1>

          <Input name='email' placeholder='E-mail' icon={FiMail} />
          <Input
            name='password'
            type='password'
            placeholder='Senha'
            icon={FiLock}
          />

          <Button type='submit'>Entrar</Button>
          <a href='forgot'>Esqueci minha senha</a>
        </form>

        <a href='create'>
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Style>
  )
}

export default Login
