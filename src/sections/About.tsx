import Image from 'next/image'

import { Button } from '@/components/Button/Button'
import { SectionHeader } from '@/components/Text/SectionHeader'
import { people } from '@/mocks/mockData'

export const About = () => {
  return (
    <section id="about" aria-labelledby="team-heading" className="py-10 sm:py-20">
      <div className="rounded-lg px-12 md:px-24 lg:px-16">
        <div className="grid gap-x-8 gap-y-20 xl:grid-cols-3">
          <div className="max-w-2xl">
            <SectionHeader
              headingId="team-heading"
              headingText="About Slow Food"
              highlightText="Reykjavík"
              description="Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
              elementum enim vitae ullamcorper suspendisse."
            />
            <Button className="text-sm" href="/about" variant="secondary">
              Read more
            </Button>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <Image
                    className="h-32 w-32 rounded-md"
                    width={300}
                    height={300}
                    src={person.imageUrl}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-primaryNeutral dark:font-normal dark:text-white">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
