import React, { useCallback, useRef } from 'react'
import { AnimationContent, Background, Content, Style } from './styles'

import getValidationErrors from 'utils/getValidationErrors'

import api from 'services/api'

import logo from 'assets/logo.svg'

import Button from 'components/Button'
import Input from 'components/Input'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { useToast } from 'hooks/Toast'
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import * as Yup from 'yup'

interface SignUpFormData {
  name: string
  email: string
  password: string
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast()
  const history = useHistory()

  const onFormSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string().email('Digite um email válido').required('Email obrigatório'),
          password: Yup.string().min(6, 'Minimo de 6 digitos'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        await api.post('/users', data)

        addToast({
          type: 'success',
          title: 'Cadastro completo',
          description: 'Você já pode fazer seu logon',
        })

        history.push('/')
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error)
          formRef.current?.setErrors(errors)
          return
        }

        addToast({
          type: 'error',
          title: 'Error no cadastro',
          description: 'Ocorreu um erro no cadastro, tente novamente',
        })
      }
    },
    [history, addToast]
  )

  return (
    <Style>
      <Background />
      <Content>
        <AnimationContent>
          <img src={logo} alt='Go Barber' />
          <Form ref={formRef} initialData={{ name: 'Miguel Andrade' }} onSubmit={onFormSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input name='name' placeholder='E-mail' icon={FiUser} />
            <Input name='email' placeholder='E-mail' icon={FiMail} />
            <Input name='password' type='password' placeholder='Senha' icon={FiLock} />

            <Button type='submit'>Cadastrar</Button>
          </Form>

          <Link to='/'>
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimationContent>
      </Content>
    </Style>
  )
}

export default SignUp
