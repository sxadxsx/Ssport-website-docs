import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
export default function Document() {
  return (
    <Html lang="zh-tw">
         <Script
            id="groove-widget"
            strategy="beforeInteractive"
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
document.body.append(typebotInitScript);`
            }}
          />
      <Head />
      
      <body>
      
        <Main />
        
        <NextScript />
     
      </body>
    </Html>
  )
}
