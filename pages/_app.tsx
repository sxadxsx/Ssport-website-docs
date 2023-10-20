import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from './components/head'
import Footer from './components/footer'
import { SessionProvider } from 'next-auth/react'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      // 在每次路由變更時重新載入 Groove 小工具
      if (typeof window !== 'undefined' && window.groove) {
        window.groove.widget.init('c204c904-e504-4986-b1c3-e7d5e890a62d', {})
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <SessionProvider session={session}>
      <div>
        <Head />
        <Component {...pageProps} />
        <Footer />
      </div>
    </SessionProvider>
  )
}
