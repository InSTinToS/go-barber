import React from 'react'
import logo from 'assets/logo.svg'
import Button from 'components/Button'
import Input from 'components/Input'
import { FiArrowLeft, FiLock, FiUser, FiMail } from 'react-icons/fi'
import { Form } from '@unform/web'
import { Style, Content, Background } from './styles'

const SignUp: React.FC = () => {
  function onFormSubmit(data: object): void {
    console.log(data)
  }

  return (
    <Style>
      <Background />
      <Content>
        <img src={logo} alt='Go Barber' />
        <Form initialData={{ name: 'Miguel Andrade' }} onSubmit={onFormSubmit}>
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
        </Form>

        <a href='create'>
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Style>
  )
}

export default SignUp
