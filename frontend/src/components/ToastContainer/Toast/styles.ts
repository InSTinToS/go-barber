import { animated } from 'react-spring'
import styled, { css } from 'styled-components'

interface StyleProps {
  type?: 'success' | 'error' | 'info'
  hasDescription: boolean
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #ebf8ff;
    color: #2e69;
  `,
  error: css`
    background: #ebf8ff;
    color: #c53030;
  `,
}

export const Style = styled(animated.div)<StyleProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;

  ${({ type }) => toastTypeVariations[type || 'info']}

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${({ hasDescription }) =>
    !hasDescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
`
