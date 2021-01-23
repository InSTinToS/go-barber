import Tooltip from 'components/Tooltip/index'

import styled, { css } from 'styled-components'

interface StyleProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

export const Style = styled.div<StyleProps>`
  display: flex;
  align-items: center;

  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  background: #232129;
  color: #606060;

  & + div {
    margin-top: 8px;
  }

  input {
    color: #f4ede8;
    flex: 1;
    background: transparent;
    border: 0;
  }

  svg {
    margin-right: 16px;
  }

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: #c53030;
    `}

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
`

export const Error = styled(Tooltip)`
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background-color: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`
