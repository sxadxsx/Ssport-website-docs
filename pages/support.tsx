import Supportchoice from './components/supportchoice';
import Supporthero from './components/supporthero';
import Ticket from './components/ticket';
import { useDocsSearch } from 'next-docs-zeta/search/client'

import Head from 'next/head'

const support = () => {
    const { search, setSearch, query } = useDocsSearch()

  return (
       <>
<Head>
        <title>雙龍體育幫助</title>
        <meta name="description" content="歡迎來到雙龍體育幫助中心,任何問題立刻聯繫" />
      </Head>
      
      <div>

               <Supporthero />
               <useDocsSearch />

        <Supportchoice />
        <Ticket />      
      </div>
    </>
      );
}

export default support;
