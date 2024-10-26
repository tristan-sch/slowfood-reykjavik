import { Fragment, useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { useRouter } from 'next/router'

import { Button } from '@/components/Button/Button'
import { NextImage } from '@/components/NextImage'
import { SectionHeader } from '@/components/Text/SectionHeader'
import { featuresTabs } from '@/mocks/mockData'

export const Features = () => {
  const router = useRouter()
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    const hash = window.location.hash.substring(1)
    const tabIndex = featuresTabs.findIndex(
      (tab) => tab.name.toLowerCase() === hash.toLowerCase(),
    )
    if (tabIndex !== -1) {
      setSelectedIndex(tabIndex)
    }
  }, [router.asPath])

  const handleTabChange = (index: number) => {
    setSelectedIndex(index)
    const tabName = featuresTabs[index].name.toLowerCase()
    router.push(`#${tabName}`, undefined, { shallow: true })
  }

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="py-10 sm:py-0 md:py-20"
    >
      <div className="rounded-lg px-12 md:px-24 lg:px-16">
        <div className="max-w-3xl">
          <SectionHeader
            headingId="features-heading"
            headingText="Slow Food"
            highlightText="Presidia"
            description="Presidia are living examples of our philosophy in action. They are small-scale
            food productions that protect traditional and artisanal products that are at
            risk of disappearing."
          />
        </div>

        <TabGroup
          selectedIndex={selectedIndex}
          onChange={handleTabChange}
          className="mt-4"
        >
          <div className="-mx-4 flex overflow-x-auto sm:mx-0">
            <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
              <TabList className="-mb-px flex space-x-10">
                {featuresTabs.map((tab) => (
                  <Tab
                    id={tab.name.toLowerCase()}
                    key={tab.name}
                    // className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:outline-none data-[selected]:border-primaryNeutral data-[selected]:text-primaryNeutral dark:text-white"
                    className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:outline-none data-[selected]:border-primaryNeutral data-[selected]:text-primaryNeutral dark:text-gray-300 dark:hover:text-gray-100 dark:data-[selected]:border-gray-100 dark:data-[selected]:text-white dark:data-[selected]:underline dark:data-[selected]:underline-offset-8"
                  >
                    {tab.name}
                  </Tab>
                ))}
              </TabList>
            </div>
          </div>

          <TabPanels as={Fragment}>
            {featuresTabs.map((tab) => (
              <TabPanel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                {tab.features.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"
                  >
                    <div className="mt-6 lg:col-span-5 lg:mt-0">
                      <h3 className="text-lg font-medium text-gray-900 dark:font-bold dark:text-white">
                        {feature.name}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500 dark:text-white">
                        {feature.description}
                      </p>
                      <div className="mt-8">
                        <Button href={tab.href} isExternalLink className="text-sm">
                          Read more
                        </Button>
                      </div>
                    </div>
                    <div className="lg:col-span-7">
                      <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-h-2 sm:aspect-w-5">
                        <NextImage
                          className="rounded-lg"
                          alt={feature.imageAlt}
                          src={feature.imageSrc}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  )
}
