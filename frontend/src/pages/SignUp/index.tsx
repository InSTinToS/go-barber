import React from 'react'
import logo from 'assets/logo.svg'
import Button from 'components/Button'
import Input from 'components/Input'
import { FiArrowLeft, FiLock, FiUser, FiMail } from 'react-icons/fi'
import { Style, Content, Background } from './styles'

const SignUp: React.FC = () => {
  return (
    <Style>
      <Background />
      <Content>
        <img src={logo} alt='Go Barber' />
        <form>
          <h1>Faça seu cadastro</h1>

          <Input name='name' placeholder='E-mail' icon={FiUser} />
          <Input name='email' placeholder='E-mail' icon={FiMail} />
          <Input
            name='password'
            type='password'
            placeholder='Senha'
            icon={FiLock}
          />

          <Button type='submit'>Cadastrar</Button>
        </form>

        <a href='create'>
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Style>
  )
}

export default SignUp
