import Supportchoice from './components/supportchoice';
import Supporthero from './components/supporthero';
import Styles from './components/docsearch.module.css';
import Ticket from './components/ticket';
import Head from 'next/head'
import { DocSearch } from '@docsearch/react'
import '@docsearch/css';
import clsx from "clsx";
const support = () => {
  return (
       <>
<Head>
        <title>雙龍體育幫助</title>
        <meta name="description" content="歡迎來到雙龍體育幫助中心,任何問題立刻聯繫" />
      </Head>
      
      <div>

                 <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          
          <h1 className="hero__title">我們能幫助你什麼嗎？</h1>
          <div className="searchDiv">
<div className={styles.docSearch}>
            <DocSearch
              apiKey="c2e792c2e75fe1dd3e40574f8b4c9a80"
              appId="70GEOCJCSX"
              indexName="help"
            />
          </div>          </div>
        </div>
      </header>

        <Supportchoice />
             
      </div>
    </>
      );
}

export default support;
