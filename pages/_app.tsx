import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import head from './components/head'

export default function App({ Component, pageProps }: AppProps) {
  return 
  <head />
  <Component {...pageProps} />
}
