import React, { useEffect } from 'react';

declare global {
  interface Window {
    botpressWebChat: {
      init: (config: {
        botId: string;
        hostUrl: string;
        messagingUrl: string;
        clientId: string;
        botConversationDescription: string;
        avatarUrl: string;
        composerPlaceholder: string;
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
        botId: '868b3737-f356-473d-8b54-ab361c88f060',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: '868b3737-f356-473d-8b54-ab361c88f060',
        botConversationDescription: '與我們的機器人客服交談',
        avatarUrl: 'https://ssangyongsports.eu.org/_next/image?url=%2Fteam.jpeg&w=128&q=75',
        composerPlaceholder: 'Chat with 雙龍體育機器人',
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
