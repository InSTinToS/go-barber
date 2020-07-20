import styled, { keyframes } from 'styled-components'
import signUpBackgroundImg from 'assets/sign-up-background.png'
import { shade } from 'polished'

const appearFromRight = keyframes`
  from{
    opacity: 0;
    transform: translateX(50px);
  } to {
    opacity: 1;
    transform: translateX(0px)
  }
`
export const Style = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
`

export const AnimationContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: ${appearFromRight} 1s;

  form {
    text-align: center;
    margin: 80px 0;
    width: 340px;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: background-color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  & > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`
