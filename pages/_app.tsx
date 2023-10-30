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
    <div>
      <script type="module">
  import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.2.10/dist/web.js'

  Typebot.initBubble({
    typebot: "customer-support-q6zv3pv",
    apiHost: "https://ssportbotview.vercel.app",
    previewMessage: {
      message: "I have a question for you!",
      avatarUrl:
        "https://ssangyongsports.eu.org/_next/image?url=%2Fteam.jpeg&w=64&q=75",
    },
    theme: {
      button: { backgroundColor: "#0042DA" },
      chatWindow: { backgroundColor: "#ffffff" },
    },
  });
</script>
      
        <SessionProvider session={session}>
          <Head />
          <Component {...pageProps} />
          <Footer />
        </SessionProvider>
      
      <Script src="/chat.js" />
    </div>
  );
}
