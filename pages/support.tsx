import Supportchoice from './components/supportchoice';
import Supporthero from './components/supporthero';
import styles from './components/docsearch.module.css';
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

                        <Supporthero />


        <Supportchoice />
             
      </div>
    </>
      );
}

export default support;
