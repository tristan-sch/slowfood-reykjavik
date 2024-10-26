import { FC, ReactNode, useState } from 'react'
import Head from 'next/head'

import Banner from '@/components/Banner'
import { Footer } from '@/sections/Footer'
import { Header } from '@/sections/Header'

type PageProps = {
  children?: ReactNode
  title?: string
  displayBanner?: boolean
}

export const Layout: FC<PageProps> = ({ children, title, displayBanner = false }) => {
  const [isBanner, setIsBanner] = useState(true)
  const titleString = title ? `${title} | Slow Food Reykjavík` : 'Slow Food Reykjavík'

  return (
    <>
      <Head>
        <title>{titleString}</title>
      </Head>
      {displayBanner && isBanner && <Banner closeBanner={() => setIsBanner(false)} />}
      <div className="mx-auto max-w-7xl font-oswald">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
