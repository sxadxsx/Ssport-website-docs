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
      <div className="app-container">
        <div className="bg-gradient" />
        <Script src="/chat.js" />
        <Head />
        <Component {...pageProps} />
        <Footer />
      </div>
    </SessionProvider>
  );
}
