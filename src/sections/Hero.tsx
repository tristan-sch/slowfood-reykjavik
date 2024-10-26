import { Button } from '@/components/Button/Button'
import { NextImage } from '@/components/NextImage'

export const Hero = () => {
  return (
    <section aria-labelledby="hero-heading" className="pb-10 md:pb-20">
      <div className="relative lg:grid lg:grid-cols-12 lg:gap-x-8">
        <div className=" px-12 pb-0 sm:pb-32  md:px-24 lg:col-span-7 lg:px-16 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1
              id="hero-heading"
              className="mt-10 text-4xl font-bold tracking-tight text-black sm:mt-10 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-white"
            >
              <span className="block xl:inline">Good, clean and fair food</span>{' '}
              <span className="block text-primaryNeutral xl:inline dark:text-white dark:underline dark:underline-offset-8">
                for all
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
              Slow Food is a worldwide grassroot movement fighting for consumers awareness
              of good, clean and fair food.
            </p>
            <div className="mt-10 flex flex-col items-start space-y-6 sm:flex-row sm:space-x-8 sm:space-y-0">
              <Button href="/#form">Get our newsletter</Button>
              <Button href="mailto:xxx[at]slowfood.is" variant="secondary">
                Contact us
              </Button>
            </div>
          </div>
        </div>
        <div className="relative hidden lg:col-span-5 lg:-mr-8 lg:block xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <div className="relative h-0 w-full pb-[66.67%] lg:h-full lg:pb-0">
            <NextImage
              className="absolute inset-0 h-full w-full rounded-lg bg-gray-50 object-cover"
              src="/hero.png"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
