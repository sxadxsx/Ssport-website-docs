import { useEffect } from 'react';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from './components/head'
import Footer from './components/footer'
import { SessionProvider } from 'next-auth/react'
const App = ({ Component, pageProps }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.groove) {
      const script = document.createElement('script');
      script.id = 'groove-script';
      script.src = 'https://c204c904-e504-4986-b1c3-e7d5e890a62d.widget.cluster.groovehq.com/api/loader';
      document.body.appendChild(script);
    }
  }, []);

  

  return (
    <SessionProvider session={session}>
        <div>
        <Head />
    
      <Component {...pageProps} />
    
            <Footer />
        </div>
       <div>
      
          </div>
    </SessionProvider>

  )

}
