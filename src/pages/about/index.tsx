import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { NextPage } from 'next'

import { Button } from '@/components/Button/Button'
import { Layout } from '@/components/Layout'
import { NextImage } from '@/components/NextImage'
import { Page } from '@/components/Page'
import { benefits, people, stats } from '@/mocks/mockData'

// type Props = {}

const AboutPage: NextPage = () => {
  return (
    <Layout title="Icelandic Products">
      <Page>
        {/* Header section */}
        <div className="mx-auto mt-10 max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            About Slow Food
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-200">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
            cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-900 lg:max-w-none lg:grid-cols-2 dark:text-white">
              <div>
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
                  Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent
                  donec est. Odio penatibus risus viverra tellus varius sit neque erat
                  velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                </p>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id
                  et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt
                  ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing
                  egestas.
                </p>
              </div>
              <div>
                <p>
                  Erat pellentesque dictumst ligula porttitor risus eget et eget.
                  Ultricies tellus felis id dignissim eget. Est augue maecenas risus nulla
                  ultrices congue nunc tortor. Enim et nesciunt doloremque nesciunt
                  voluptate.
                </p>
                <p className="mt-8">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id
                  et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt
                  ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing
                  egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
              </div>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div
                  key={statIdx}
                  className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6"
                >
                  <dt className="text-base leading-7 text-gray-900 dark:text-white">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl font-semibold tracking-tight">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 hidden sm:block xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="relative aspect-[9/4] lg:shrink-0">
            <NextImage
              className="xl:rounded-3xl"
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2894&q=80"
            />
          </div>
        </div>

        {/* Team section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-200">
              Excepturi repudiandae alias ut. Totam aut facilis. Praesentium in neque vel
              omnis. Eos error odio. Qui fugit voluptatibus eum culpa.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="relative aspect-[14/13] w-full">
                  <NextImage className="xl:rounded-2xl" src={person.imageUrl} />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-900 dark:text-white">
                  {person.role}
                </p>
                <p className="text-sm leading-6 text-gray-500 dark:text-gray-200">
                  {person.location}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA section */}
        <div className="relative isolate mt-32 sm:mt-40">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-black/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20 dark:bg-black/40 dark:ring-white/30">
              <div className="lg:aspect-square hidden h-96 w-full flex-none sm:block lg:h-auto lg:max-w-sm">
                <NextImage
                  className="relative rounded-2xl shadow-xl"
                  src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                />
              </div>

              <div className="w-full flex-auto">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Slow Food Youth
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-200">
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
                  voluptatum cupiditate veritatis in accusamus quisquam.
                </p>
                <ul
                  role="list"
                  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 sm:grid-cols-2"
                >
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-x-3">
                      <CheckCircleIcon aria-hidden="true" className="h-7 w-5 flex-none" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex justify-center sm:justify-start">
                  <Button className="text-sm" variant="secondary">
                    Join the network
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
              className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            />
          </div>
        </div>
      </Page>
    </Layout>
  )
}

export default AboutPage
