import { styled } from '@ignite-ui/react'
import Link from 'next/link'

export const Container = styled('nav', {
  position: 'absolute',
  width: '100%',
  minHeight: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '0 50px',
  left: 0,
  top: 0,
})

export const LinkContainer = styled(Link, {
  textDecoration: 'none',
})
