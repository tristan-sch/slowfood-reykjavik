import { Button } from '@/components/Button/Button'
import { ContainerWithBackground } from '@/components/Containers'
import { NextImage } from '@/components/NextImage'
import { SectionHeader } from '@/components/Text/SectionHeader'

export const Guide = () => {
  return (
    <section aria-labelledby="guide-heading" className="py-10 md:py-20">
      <ContainerWithBackground id="guides">
        <div className="mb-12">
          <SectionHeader
            headingId="guide-heading"
            headingText="Discover our"
            highlightText="guides"
            description="Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum
            enim vitae ullamcorper suspendisse."
          />
        </div>

        <div className="h-full lg:h-96">
          <div className="grid min-h-full grid-cols-1 grid-rows-2 space-y-4 lg:grid-cols-2 lg:grid-rows-1 lg:space-x-0 lg:space-y-0">
            <div className="relative flex">
              <NextImage src="/goat-2.jpg" className="rounded-lg lg:rounded-s-lg" />
              <div className="relative flex w-full flex-col items-start justify-end rounded-lg bg-black bg-opacity-40 p-8 sm:p-12 lg:rounded-s-lg">
                <h2 className="text-lg font-medium text-white text-opacity-75">
                  Icelandic products
                </h2>
                <p className="mt-1 text-2xl font-medium text-white">
                  Ark of taste Iceland
                </p>
                <Button className="mt-4 text-sm" href="/icelandic-products" isWhite>
                  Discover
                </Button>
              </div>
            </div>
            <div className="relative flex">
              <NextImage src="/restaurant.jpg" className="rounded-lg lg:rounded-s-lg" />
              <div className="relative flex w-full flex-col items-start justify-end rounded-lg bg-black bg-opacity-40 p-8 sm:p-12 lg:rounded-e-lg">
                <h2 className="text-lg font-medium text-white text-opacity-75">
                  Icelandic places
                </h2>
                <p className="mt-1 text-2xl font-medium text-white">
                  Map of Places and restaurants
                </p>
                <Button className="mt-4 text-sm" href="#" isWhite>
                  Discover
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ContainerWithBackground>
    </section>
  )
}
