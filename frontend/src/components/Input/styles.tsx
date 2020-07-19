import styled, { css } from 'styled-components'

interface StyleProps {
  isFocused: boolean
  isFilled: boolean
}

export const Style = styled.div<StyleProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #232129;
  color: #606060;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${({ isFocused }) =>
    isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    color: #f4ede8;
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #606060;
    }
  }

  svg {
    margin-right: 16px;
  }
`
