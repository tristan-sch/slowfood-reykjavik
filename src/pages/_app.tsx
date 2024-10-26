import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Providers } from '@/context/providers'

import '@/styles/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Slow Food Reykjavík</title>
        <link rel="icon" href="/slowfood-favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  )
}
