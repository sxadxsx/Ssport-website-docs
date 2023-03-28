import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from './components/head'
import footer from './components/footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
    <Head />
<Component {...pageProps} />
     <footer />
    </div>

  );
}
