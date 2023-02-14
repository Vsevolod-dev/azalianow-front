import Container from '@/components/Container/Container'
import Header from '@/components/Header/Header'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  )
}
