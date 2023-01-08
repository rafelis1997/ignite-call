import { styled, Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  overflowX: 'hidden',
  overflowY: 'scroll',
  height: '100vh',
  scrollSnapType: 'y proximity',
  transition: 'scroll 0.5s ease',
  scrollBehavior: 'smooth',

  '> div': {
    scrollSnapAlign: 'center',
  },
})

export const ContainerHero = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  gap: '$20',
  justifyContent: 'flex-start',
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  margin: '0 auto',
  paddingLeft: '20px',
})

export const Description = styled('div', {
  maxWidth: 480,
  padding: '0 $10',

  [`> ${Heading}`]: {
    '@media(max-width:600px)': {
      fontSize: '$6xl',
    },
  },

  [`> ${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
  },
})

export const Preview = styled('div', {
  paddingRight: '$8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$20',

  '@media(max-width:600px)': {
    display: 'none',
  },
})

export const FormAnnotation = styled('div', {
  marginTop: '$2',

  [`> ${Text}`]: {
    color: '$gray400',
  },
})

export const Features = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$40',
  margin: '150px 0',

  variants: {
    direction: {
      inverted: {
        flexDirection: 'row-reverse',
      },
      default: {
        flexDirection: 'row',
      },
    },
  },

  defaultVariants: {
    direction: 'default',
  },
})

export const FeaturesImages = styled(Image, {
  width: '100%',
  maxWidth: '400px',
  height: 'auto',
})
