import React, { useCallback, useRef } from 'react'
import { AnimationContent, Background, Content, Style } from './styles'

import getValidationErrors from 'utils/getValidationErrors'

import logo from 'assets/logo.svg'

import Button from 'components/Button'
import Input from 'components/Input'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { useAuth } from 'hooks/Auth'
import { useToast } from 'hooks/Toast'
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import * as Yup from 'yup'

interface LoginData {
  email: string
  password: string
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { login } = useAuth()
  const { addToast } = useToast()
  const history = useHistory()

  const onFormSubmit = useCallback(
    async (data: LoginData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          email: Yup.string().email('Digite um email válido').required('Email obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        await login({
          email: data.email,
          password: data.password,
        })

        history.push('/dashboard')
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error)
          formRef.current?.setErrors(errors)
          return
        }

        addToast({
          type: 'error',
          title: 'Error na autenticação',
          description: 'Ocorreu um erro no login',
        })
      }
    },
    [login, addToast, history]
  )

  return (
    <Style>
      <Content>
        <AnimationContent>
          <img src={logo} alt='Go Barber' />
          <Form ref={formRef} onSubmit={onFormSubmit}>
            <h1>Faça seu logon</h1>

            <Input name='email' placeholder='E-mail' icon={FiMail} />
            <Input name='password' type='password' placeholder='Senha' icon={FiLock} />

            <Button type='submit'>Entrar</Button>
            <a href='forgot'>Esqueci minha senha</a>
          </Form>

          <Link to='/signup'>
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContent>
      </Content>
      <Background />
    </Style>
  )
}

export default Login
