import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from './components/head'
import Footer from './components/footer'
import { Provider } from 'next-auth/client'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      
    <Head />
       <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
        <Footer />
    
  </div>

  );
}
