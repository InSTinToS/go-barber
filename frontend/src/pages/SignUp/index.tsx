import React, { useCallback, useRef } from 'react'
import logo from 'assets/logo.svg'
import Button from 'components/Button'
import Input from 'components/Input'
import { FiArrowLeft, FiLock, FiUser, FiMail } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import getValidationErrors from 'utils/getValidationErrors'
import { Style, Content, Background } from './styles'

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const onFormSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .email('Digite um email válido')
          .required('Email obrigatório'),
        password: Yup.string().min(6, 'Minimo de 6 digitos'),
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
      <Background />
      <Content>
        <img src={logo} alt='Go Barber' />
        <Form
          ref={formRef}
          initialData={{ name: 'Miguel Andrade' }}
          onSubmit={onFormSubmit}
        >
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
