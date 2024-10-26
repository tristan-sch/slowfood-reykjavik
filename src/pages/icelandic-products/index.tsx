import { NextPage } from 'next'

import { Button } from '@/components/Button/Button'
import { GridList } from '@/components/GridList'
import { Layout } from '@/components/Layout'
import { Page } from '@/components/Page'
import { products } from '@/mocks/mockData'

// type Props = {}

const IcelandicProductsPage: NextPage = () => {
  return (
    <Layout title="Icelandic Products">
      <Page title="Guide: Icelandic products" subtitle="Ark of taste Iceland">
        <GridList gridContent={products} />
        <div className="mt-20">
          <Button
            href="https://www.fondazioneslowfood.com/en/nazioni-arca/iceland-en/"
            isExternalLink
            className="text-sm"
            variant="secondary"
          >
            See more
          </Button>
        </div>
      </Page>
    </Layout>
  )
}

export default IcelandicProductsPage
