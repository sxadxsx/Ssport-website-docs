 import Link from 'next/link';
import Image from 'next/image';
import styles from './Button.module.css';

function Ticket() {
  return (
    <section>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="mt-4 md:mt-0">
          <h2 className={`mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white `}>
            與
                        <span className={styles.abc}>機器人</span>
           進行交談
          </h2>
         
        </div>
       <div className={`${styles.centerDiv} ${styles.relative} ${styles.hFull} ${styles.wFull} ${styles.overflowClip} ${styles.roundedMd} ${styles.border} ${styles.borderZinc200} ${styles.bgWhite} ${styles.p2} ${styles.px0} ${styles.py0}`}></div>
        <iframe
            
            srcDoc="<body><script src='https://cdn.botpress.cloud/webchat/v0/inject.js'></script>
            <script>
              window.botpressWebChat.init({
                  'composerPlaceholder': 'Chat with bot',
                  'botConversationDescription': 'This chatbot was built surprisingly fast with Botpress',
                  'botName': 'Name',
                  'botId': 'f87c4530-e481-49dd-8841-236d83aa1389',
                  'hostUrl': 'https://cdn.botpress.cloud/webchat/v0',
                  'messagingUrl': 'https://messaging.botpress.cloud',
                  'clientId': 'f87c4530-e481-49dd-8841-236d83aa1389',
                  'enableConversationDeletion': true,
                  'showPoweredBy': true,
                  'className': 'webchatIframe',
                  'containerWidth': '100%25',
                  'layoutWidth': '100%25',
                  'hideWidget': true,
                  'showCloseButton': false,
                  'disableAnimations': true,
                  'closeOnEscape': false,
                  'showConversationsButton': false,
                  'enableTranscriptDownload': false,
                  'stylesheet':'https://webchat-styler-css.botpress.app/prod/code/3fcd3e4e-d5bc-4bf5-8699-14b621b3ada2/v31782/style.css'
                  
              });
            window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);
            </script></body>"
            width="100%"
            height="500%"
          ></iframe>
       <div/>
      </div>
    </section>
  );
}

export default Ticket;
