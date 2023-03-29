import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from './components/head'
import Footer from './components/footer'
import News from './components/news'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
    <Head />
<Component {...pageProps} />
          <News />
    <Footer />
  </div>

  );
}
