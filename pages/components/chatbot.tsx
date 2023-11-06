import React, { useEffect } from 'react';

declare global {
  interface Window {
    botpressWebChat: {
      init: (config: {
        botId: string;
        hostUrl: string;
        messagingUrl: string;
        clientId: string;
      }) => void;
    };
  }
}

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;

    script.onload = () => {
      window.botpressWebChat.init({
        botId: '<botID>',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: '<clientID>',
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="webchat" />;
};

export default Chatbot;
