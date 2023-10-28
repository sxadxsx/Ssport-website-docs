import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from './components/head'
import Footer from './components/footer'
import { SessionProvider } from 'next-auth/react'
import Script from 'next/script';
export default function App({
  Component, 
  pageProps: { session, ...pageProps },
}: AppProps) {

  return (
    <SessionProvider session={session}>
        <div>
          <div className="bg-gradient h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
  <Script src="/chat.js" />
        <Head />
    
      <Component {...pageProps} />
    
            <Footer />
        </div>
    </SessionProvider>

  )

}
