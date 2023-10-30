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
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const typebotInitScript = document.createElement("script");
typebotInitScript.type = "module";
typebotInitScript.innerHTML = `import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.2.10/dist/web.js'

Typebot.initBubble({
  typebot: "lead-generation-ils4v1g",
  apiHost: "https://ssportbotview.vercel.app",
  theme: {
    button: { backgroundColor: "#0042DA", iconColor: "#FFFFFF" },
    previewMessage: { backgroundColor: "#ffffff", textColor: "black" },
  },
});
`;
document.body.append(typebotInitScript);
          `,
        }}
      ></script>
      
        <SessionProvider session={session}>
          <Head />
          <Component {...pageProps} />
          <Footer />
        </SessionProvider>
      
      <Script src="/chat.js" />
    </div>
  );
}
