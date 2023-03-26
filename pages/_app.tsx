import '@/styles/globals.css'
import React, { Fragment } from 'react'
import type { AppProps } from 'next/app'
import Head from './components/head'

const Page = () => (
  <Fragment>
    <Head />
 <Component {...pageProps} />
  </Fragment>
)

export default Page
