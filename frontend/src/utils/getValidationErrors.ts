import { ValidationError } from 'yup'

interface Errors {
  [key: string]: string
}

export default function getValidationErrors(error: ValidationError): Errors {
  const ValidationErrors: Errors = {}

  error.inner.forEach(errorElement => {
    if (errorElement.path !== undefined) ValidationErrors[errorElement.path] = errorElement.message
  })

  return ValidationErrors
}
