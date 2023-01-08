import { styled } from '@ignite-ui/react'

export function Policy() {
  return (
    <Container>
      <PolicyStyled href="/policy">Privacy Policy</PolicyStyled>
    </Container>
  )
}

const PolicyStyled = styled('a', {
  color: '$gray400',
  fontFamily: '$default',
  textDecoration: 'none',
  fontSize: '$sm',
})

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 0',
})
