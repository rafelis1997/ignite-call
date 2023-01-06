import '../lib/dayjs'

import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ToastContainer } from 'react-toastify'
import { QueryClientProvider } from '@tanstack/react-query'
import { DefaultSeo } from 'next-seo'

import { globalStyles } from '../styles/global'
import 'react-toastify/dist/ReactToastify.css'
import { queryClient } from '../lib/react-query'
import { styled } from '@ignite-ui/react'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'https://www.url.ie/',
            siteName: 'Ignite Call',
          }}
        />
        <Component {...pageProps} />
        <Policy href="/policy">Privacy Policy</Policy>
        <StyledContainer position="top-right" autoClose={3000} />
      </SessionProvider>
    </QueryClientProvider>
  )
}

const StyledContainer = styled(ToastContainer, {
  '&&&.Toastify__toast-container': {},
  '.Toastify__toast': {
    background: '$gray600',
    color: '$gray100',
  },
  '.Toastify__toast-body': {},
  '.Toastify__progress-bar': {
    background: '$ignite500',
  },
})

export const Policy = styled('a', {
  position: 'absolute',
  left: '50%',
  bottom: 10,
  color: '$gray400',
  fontFamily: '$default',
  textDecoration: 'none',
  fontSize: '$sm',
})
