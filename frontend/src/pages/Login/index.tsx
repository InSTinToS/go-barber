import React, { useRef, useCallback } from 'react'
import logo from 'assets/logo.svg'
import * as Yup from 'yup'
import Button from 'components/Button'
import Input from 'components/Input'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi'
import getValidationErrors from 'utils/getValidationErrors'
import { Style, Content, Background } from './styles'

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const onFormSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um email válido')
          .required('Email obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
      })

      await schema.validate(data, {
        abortEarly: false,
      })
    } catch (error) {
      const errors = getValidationErrors(error)
      formRef.current?.setErrors(errors)
    }
  }, [])

  return (
    <Style>
      <Content>
        <img src={logo} alt='Go Barber' />
        <Form ref={formRef} onSubmit={onFormSubmit}>
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
        </Form>

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
