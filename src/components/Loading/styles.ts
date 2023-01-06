import { keyframes, styled } from '@ignite-ui/react'

const rotate = keyframes({
  '100%': { transform: 'rotate(360deg)' },
})

const prixClipFix = keyframes({
  '0%': { clipPath: 'polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)' },
  '25%': { clipPath: 'polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)' },
  '50%': {
    clipPath: 'polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)',
  },
  '75%': { clipPath: 'polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)' },
  '100%': { clipPath: 'polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)' },
})

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',

  '.loader': {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    position: 'relative',
    animation: `${rotate} 1s linear infinite`,
  },

  '.loader::before': {
    content: '',
    boxSizing: 'border-box',
    position: 'absolute',
    inset: '0px',
    borderRadius: '50%',
    border: '5px solid $ignite500',
    animation: `${prixClipFix} 2s linear infinite`,
  },
})
