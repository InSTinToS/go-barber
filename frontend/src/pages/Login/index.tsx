import React from 'react'
import logo from 'assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'
import { Style, Content, Background } from './styles'

const Login: React.FC = () => {
  return (
    <Style>
      <Content>
        <img src={logo} alt='Go Barber' />
        <form>
          <h1>Faça seu logon</h1>

          <input placeholder='E-mail' />
          <input type='password' placeholder='Senha' />
          <button type='submit'>Entrar</button>

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
