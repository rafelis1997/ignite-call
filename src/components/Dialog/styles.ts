import { keyframes, styled } from '@ignite-ui/react'
import * as Dialog from '@radix-ui/react-dialog'

const overlayShow = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

export const Overlay = styled(Dialog.Overlay, {
  background: 'rgba(0, 0, 0, 0.8)',
  width: '100%',
  height: '100%',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const ContentContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '30px',
})

export const Content = styled(Dialog.Content, {
  maxWidth: '500px',
  padding: '20px',
  background: '$gray600',
  fontFamily: '$default',
  color: '$gray100',

  display: 'flex',
  flexDirection: 'column',
  borderRadius: '6px',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxHeight: '85vh',
})

export const Title = styled(Dialog.Title, {})

export const CloseButton = styled(Dialog.Close, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray100',
  cursor: 'pointer',

  fontFamily: 'inherit,',
  height: '25px',
  width: '25px',
  position: 'absolute',
  top: '20px',
  right: '20px',

  '&:not(:disabled):hover': {
    color: '#FFF',
  },

  '&:focus': {
    boxShadow: '0 0 0 4px $colors$gray400',
  },
})

export const Button = styled('button', {
  all: 'unset',
  background: '#FFFFFF',
  borderRadius: '2px',
  cursor: 'pointer',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '14px',
  color: 'rgba(0, 0, 0, 0.54)',
  fontWeight: '$bold',
  paddingRight: '$4',

  img: {
    marginRight: '$4',
  },

  '&:not(:disabled):hover': {
    background: '#4285F4',
    color: '#FFF',
  },

  '&:not(:disabled):focus': {
    boxShadow: '0 0 0 4px $colors$gray400',
    background: '#4285F4',
    color: '#FFF',
  },
})
