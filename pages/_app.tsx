import '@/styles/globals.css'
import React, { Fragment } from 'react'
import type { AppProps } from 'next/app'
import Head from './components/head'

export default function App({ Component, pageProps }: AppProps) {
  <Fragment>
    <Head />
 <Component {...pageProps} />
  </Fragment>
}

